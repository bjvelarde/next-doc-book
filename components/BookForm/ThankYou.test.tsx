import { screen, renderWithFormik } from '../../test-utils/testing-library-utils';
import ThankYou from './ThankYou';

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useFormikContext: () => ({
    values: {
      date: 'date',
      doctorId: 'doctorId',
      start: 'start',
      name: 'name'
    }
  })
}));

test('renders with default label', async () => {
  renderWithFormik(<ThankYou />);

  const thankYou = screen.getByText(/booking.thankyou/i);
  expect(thankYou).toBeInTheDocument();
});