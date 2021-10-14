import { render, screen, waitFor, waitForElementToBeRemoved } from '../../test-utils/testing-library-utils';
// import { Router } from 'react-router-dom';
// import {createMemoryHistory} from 'history';
import { rest } from 'msw';
import getConfig from 'next/config';
import { server } from '../../test-utils/mockServer';
import Doctors from '.';

const {
  publicRuntimeConfig: {
    API_BASE_URL: baseUrl,
    API_DOCTOR_PATH: doctorPath
  }
} = getConfig();

test('handles system error', async () => {

	server.resetHandlers(
		rest.get(`${baseUrl}${doctorPath}`, (req, res, ctx) => res(ctx.status(500)))
	);

  // const history = createMemoryHistory();
  render(
    // <Router history={history}>
      <Doctors />
    // </Router>
  );

  await waitForElementToBeRemoved(() => screen.getByTestId(/spinner/i));

	await waitFor(async () => {
		const alert = await screen.findByRole('alert');

		expect(alert).toBeInTheDocument();
	});

});