export default {
  name: 'students',
  type: 'document',
  title: 'Students',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
            },
          ],
        },
      ],
    },
    {
      name: 'number',
      type: 'number',
      title: 'Number',
      validation: (Rule) => Rule.min(0).max(5),
    },
  ],
}
