import { render, screen } from '../../test-utils/testing-library-utils';
import Header from '.';

test('renders with default link', async () => {
  render(<Header />);

  const banner = screen.getByRole('banner', {name: /top-bar/i} );
  expect(banner).toBeInTheDocument();

  // const linkHome = screen.getByRole('link', {name: /book-a-doctor/i} );
  // expect(linkHome).toBeInTheDocument();
});