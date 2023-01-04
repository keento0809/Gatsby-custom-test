import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: `gatsby-source-openweathermap`,
      options: {
        apikey: process.env.GATSBY_OPEN_WEATHER_API_KEY,
        location: 'York',
        units: 'metric',
        type: 'forecast',
      },
    },
    `gatsby-plugin-pnpm`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;
