import packageJson from './package.json';
import dotenv from 'dotenv';

dotenv.config();

export default ({ config }) => {
  return {
    ...config,
    version: packageJson.version,
    extra: {
      ...config.extra,
      CONSUMER_KEY: process.env.CONSUMER_KEY,
      CONSUMER_SECRET: process.env.CONSUMER_SECRET,
    },
  };
};
