import { render, screen, waitFor } from '../../test-utils/testing-library-utils';
// import { Router } from 'react-router-dom';
// import {createMemoryHistory} from 'history';
import getConfig from 'next/config';
import { rest } from 'msw';
import { server } from '../../test-utils/mockServer';
import Doctor from '.';

 jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'), // use actual for all non-hook parts
  useRouter: () => ({
    query: {
      id: 'fakeId2'
    }
  })
}));

const {
  publicRuntimeConfig: {
    API_BASE_URL: baseUrl,
    API_DOCTOR_PATH: doctorPath
  }
} = getConfig();

server.resetHandlers(
  rest.get(`${baseUrl}${doctorPath}/fakeId2`, (req, res, ctx) => res(ctx.status(500)))
);

test('handles system error', async () => {

  // const history = createMemoryHistory();
  render(
    // <Router history={history}>
      <Doctor />
    // </Router>
  );

	await waitFor(async () => {
		const alert = await screen.findByRole('alert');

		expect(alert).toBeInTheDocument();
	});

});