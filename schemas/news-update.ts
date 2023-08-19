import { BulbOutlineIcon } from '@sanity/icons';
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
      initialValue(): { date: Date } {
        return {
          date: new Date(),
        };
      },
      name: 'date',
      title: 'Date',
      type: 'date',
      validation(rule: Rule): Rule {
        return rule.required();
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation(rule: Rule): Rule {
        return rule.required();
      },
    },
  ],
  icon: BulbOutlineIcon,
  name: 'newsUpdate',
  title: 'News Update',
  type: 'document',
});
