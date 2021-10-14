import { render, screen, waitForElementToBeRemoved } from '../../test-utils/testing-library-utils';
import Doctors from '.';

test('renders with doctors list', async () => {
  render(<Doctors />);

  const titleText = screen.getByRole('heading', { name: /main-title/i });
  expect(titleText).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByTestId(/spinner/i));

  const cards = await screen.findAllByTestId(/doctor-card/i);
	expect(cards.length).toBeGreaterThan(0);

  // await waitFor(async () => {
	// 	const cards = await screen.findAllByTestId(/doctor-card/i);

	// 	expect(cards.length).toBeGreaterThan(0);
	// });
});