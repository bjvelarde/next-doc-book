import { rest } from 'msw';
import mockData from './mockData.json';
import mockDoctor from './mockDoctor.json';
import mockBooking from './mockBooking.json';

import getConfig from 'next/config';

const {
  publicRuntimeConfig: {
	API_BASE_URL: baseUrl,
	API_DOCTOR_PATH: doctorPath,
	API_BOOKING_PATH: bookingPath
  }
} = getConfig();

export const handlers = [
	rest.get(`${baseUrl}${doctorPath}`, (req, res, ctx) => {
		return res(ctx.json(mockData));
	}),
	rest.get(`${baseUrl}${doctorPath}/fakeId`, (req, res, ctx) => {
		return res(ctx.json(mockDoctor));
	}),
  rest.get(`${baseUrl}${doctorPath}/M2159`, (req, res, ctx) => {
		return res(ctx.json([...mockData].pop()));
	}),
	rest.post(`${baseUrl}${bookingPath}`, (req, res, ctx) => {
		return res(ctx.json(mockBooking));
	})
];
