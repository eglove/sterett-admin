import { codeInput } from '@sanity/code-input';
import { dashboardTool, projectUsersWidget } from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel';

import { updateWidget } from './dashboard/update';
import { deskStructure } from './desk-structure';

const widgets = [
  updateWidget({ layout: { width: 'medium' } }),
  projectUsersWidget({ layout: { width: 'medium' } }),
  vercelWidget(),
];

export const developmentPlugins = [
  deskTool({
    structure: deskStructure,
  }),
  dashboardTool({ title: 'Updates', widgets }),
  visionTool(),
  codeInput(),
];

export const productionPlugins = [
  deskTool({
    structure: deskStructure,
  }),
  dashboardTool({ title: 'Updates', widgets }),
  codeInput(),
];
