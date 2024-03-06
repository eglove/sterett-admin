import { LinkIcon } from '@sanity/icons';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';
import type { Rule } from 'sanity';
import { defineType } from 'sanity';

export default defineType({
  fields: [
    orderRankField({ type: 'navigation' }),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation(rule: Rule) {
        return rule.required();
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      validation(rule: Rule) {
        return rule.uri({ relativeOnly: true }).required();
      },
    },
    {
      hidden: true,
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  icon: LinkIcon,
  name: 'navigation',
  orderings: [
    orderRankOrdering,
    {
      by: [{ direction: 'asc', field: 'order' }],
      name: 'order',
      title: 'Order',
    },
  ],
  title: 'Navigation',
  type: 'document',
});
