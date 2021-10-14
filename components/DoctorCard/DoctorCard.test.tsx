import { render, screen } from '../../test-utils/testing-library-utils';
import DoctorCard from '.';
import mockDoctor from '../../test-utils/mockDoctor.json';

test('renders with default label', async () => {

  render(<DoctorCard doctor={mockDoctor}/>);

  const linkToPage = screen.getByRole('link', {name: /fake doctor description line1, line2, district/i} );
  expect(linkToPage).toBeInTheDocument();

  const title = screen.getByRole('heading', {name: /fake doctor/i} );
  expect(title).toBeInTheDocument();

  const openingHoursTitle = screen.getByRole('heading', {name: /opening-hours/i} );
  expect(openingHoursTitle).toBeInTheDocument();
});