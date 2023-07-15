import { DocumentTextIcon } from '@sanity/icons';
import { defineType, type Rule } from 'sanity';

export default defineType({
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation(rule: Rule): Rule {
        return rule.required();
      },
    },
    {
      name: 'slug',
      options: {
        slugify(input: string): string {
          return input.toLowerCase().replaceAll(/\s+/g, '-').slice(0, 200);
        },
        source: 'title',
      },
      title: 'Slug - https://sterettcreekvillagetrustee.com/page/SLUG',
      type: 'slug',
      validation(rule: Rule): Rule {
        return rule.required();
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  icon: DocumentTextIcon,
  name: 'page',
  title: 'Page',
  type: 'document',
});
