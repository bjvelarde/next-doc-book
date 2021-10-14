import { screen, renderWithFormik, waitFor } from '../../test-utils/testing-library-utils';
import BookForm from '.';
import mockDoctor from '../../test-utils/mockDoctor.json';

test('renders with necessary elements', async () => {
  renderWithFormik(<BookForm doctor={mockDoctor} />);

  const confirmButton = screen.getByRole('button', {name: /booking.confirm/i} );
  expect(confirmButton).toBeInTheDocument();

  await waitFor(async () => {
		const timeSlots = await screen.findAllByTestId(/time-slot/i);

		expect(timeSlots.length).toBeGreaterThan(0);
	});

  const nameField = screen.getByRole('textbox', {name: /booking.name/i});
  expect(nameField).toBeInTheDocument();

  const timeSlotCombo = screen.getByRole('combobox', {name: /booking.start/i});
  expect(timeSlotCombo).toBeInTheDocument();

  const datePicker = screen.getByText(/date/i);
  expect(datePicker).toBeInTheDocument();
});