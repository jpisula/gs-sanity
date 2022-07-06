import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'post',
  title: 'Post',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'language',
      title: 'Language',
      type: 'array',
      description: 'Language of an article',
      of: [{type: 'reference', to: {type: 'languages'}}],
      validation: Rule => Rule.required(),
      validation: Rule => Rule.max(1)
    },
    {
      name: 'seoDesc',
      type: 'string',
      title: 'SEO description',
      desription: 'SEO description should describe article for Google Web Search Engine.',
      validation: Rule => Rule.max(250).warning(`SEO description shouldn't be more than 250 characters.`),
      validation: Rule => Rule.required()
    },
    {
      name: 'seoKeyWords',
      title: 'Key words',
      type: 'array',
      description: 'Key words for an article for Google Web Search Engine.',
      of: [{type: 'string', validation: Rule => Rule.max(50).warning(`A single key word shouldn't be more than 50 characters.`)}],
      validation: Rule => Rule.required(),
      validation: Rule => Rule.unique()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text for main image',
      desription: 'Alternative text should describe what is on a photo.',
      validation: Rule => Rule.max(180).warning(`An alternative text shouldn't be more than 180 characters.`),
      validation: Rule => Rule.required()
    },
    {
      name: 'postCategories',
      title: 'Post categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'postCategory'}}],
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'readNext',
      title: 'Read next',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
      validation: Rule => Rule.max(5)
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}