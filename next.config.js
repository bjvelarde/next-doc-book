require('dotenv').config();
const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */
module.exports = {
  i18n,
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_KEY: process.env.API_KEY,
    API_DOCTOR_PATH: process.env.API_DOCTOR_PATH,
    API_BOOKING_PATH: process.env.API_BOOKING_PATH,
    PER_PAGE: process.env.PER_PAGE
  }
}
