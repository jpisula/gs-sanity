import { TagIcon } from '@sanity/icons'

export default {
  name: 'postCategory',
  title: 'Post Category',
  icon: TagIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}