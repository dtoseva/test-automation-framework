import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL!,
  STANDARD_USER: process.env.STANDARD_USER!,
  STANDARD_PASSWORD: process.env.STANDARD_PASSWORD!,
};