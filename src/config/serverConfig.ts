import { config } from 'dotenv';
config();

const env: {
  api: undefined | string;
  token: undefined | string;
} = { api: process.env.MAKERS_API, token: process.env.API_KEY };

export default env;
