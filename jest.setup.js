// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import 'jest-canvas-mock';

const API_BASE_URL = 'https://fe-assignment-api.herokuapp.com';
const API_DOCTOR_PATH = '/doctor';
const API_BOOKING_PATH = '/booking';
const PER_PAGE = 20;

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    API_BASE_URL,
    API_DOCTOR_PATH,
    API_BOOKING_PATH,
    PER_PAGE
  }
}));

import { server } from './test-utils/mockServer';
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

// jest.mock('next/router', () => {
//   return {
//     useRouter: () => {
//       return {
//         query: ''
//       }
//     }
//   }
// });
