import { render, screen, waitForElementToBeRemoved } from '../../test-utils/testing-library-utils';
import Doctor from '.';
import mockDoctor from '../../test-utils/mockDoctor.json';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'), // use actual for all non-hook parts
  useRouter: () => ({
    query: {
      id: 'fakeId'
    }
  })
}));

test('renders doctor page', async () => {

  render(<Doctor />);

  const headerLink = screen.getByRole('link', { name: /main-title/i });
  expect(headerLink).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByTestId(/spinner/i));

  const doctorName = screen.getByText(mockDoctor.name);
  expect(doctorName).toBeInTheDocument();

  const openingHoursTable = screen.getByRole('table', {name: /opening-hours/i} );
  expect(openingHoursTable).toBeInTheDocument();
});
