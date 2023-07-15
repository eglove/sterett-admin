import {
  type DashboardWidget,
  DashboardWidgetContainer,
  type LayoutConfig,
} from '@sanity/dashboard';
import type { JSX } from 'react';

export type DocumentListConfig = {
  apiVersion?: string;
  createButtonText?: string;
  limit?: number;
  order?: string;
  query?: string;
  queryParams?: Record<string, any>;

  showCreateButton?: boolean;
  title?: string;
  types?: string[];
};

function UpdateWidget(): JSX.Element {
  return (
    <DashboardWidgetContainer header="Latest Updates">
      <ul>
        <li>
          Calendar now uses native dialog for popups to help page load faster.
        </li>
        <li>
          News feed auto-scrolls to closest date and uses smaller container
          optimized for mobile devices.
        </li>
        <li>
          Style Updates: Home page and calendar text will use same styles via{' '}
          <a
            href="https://tailwindcss.com/docs/typography-plugin"
            rel="noreferrer"
            target="_blank"
          >
            Tailwind Prose.
          </a>
        </li>
      </ul>
    </DashboardWidgetContainer>
  );
}

export function updateWidget(config?: {
  layout: LayoutConfig;
}): DashboardWidget {
  return {
    // eslint-disable-next-line func-names
    component: function component(): JSX.Element {
      return <UpdateWidget />;
    },
    layout: config?.layout,
    name: 'update-widget',
  };
}
