import * as process from 'node:process';

import { defineConfig } from 'sanity';
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel';

import schema from './schemas/schema';
import { developmentPlugins, productionPlugins } from './util-sanity-config';

export default defineConfig({
  dataset: 'production',
  name: 'default',
  plugins:
    process.env.NODE_ENV === 'development'
      ? developmentPlugins
      : productionPlugins,
  projectId: '540gjnt8',
  schema: {
    types: schema,
  },
  title: 'Sterett Creek Village Trustee Admin',
  widgets: [vercelWidget()],
});
