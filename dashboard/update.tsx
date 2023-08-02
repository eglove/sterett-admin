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
  queryParams?: Record<string, unknown>;

  showCreateButton?: boolean;
  title?: string;
  types?: string[];
};

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    dateStyle: 'medium',
  });
};

function UpdateWidget(): JSX.Element {
  return (
    <DashboardWidgetContainer header="Latest Updates">
      <ul>
        <li>
          <time>{formatDate('08/02/2023')}</time> - Reformatted news page to be
          in ascending order. Older news and events will no longer show. The
          color backgrounds on trustees are now randomized.
        </li>
        <li>
          <time>
            <strong>{formatDate('08/01/2023')}</strong>
          </time>{' '}
          - Multiple style changes. Images on pages have a blur effect on load,
          and show a filtered shadow effect. The news page uses newly styled
          cards. Links on the files page dim on hover. Trustees cards are styled
          with image effects. Updated calendar event info popup. Added
          validation so that the end date of calendar events must come after
          start dates.
        </li>
        <li>
          <time>
            <strong>{formatDate('07/19/2023')}</strong>
          </time>{' '}
          - Expanded size of{' '}
          <a
            href="https://sterettcreekvillagetrustee.com/news"
            rel="noreferrer"
            target="_blank"
          >
            News page
          </a>{' '}
          to find a middle ground between mobile/desktop.
        </li>
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
