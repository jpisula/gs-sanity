import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'homepage',
  title: 'Homepage',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    {
      name: 'documentTitle',
      type: 'string',
      title: 'Document Title',
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
      name: 'welcomeTexts',
      title: 'Welcome texts',
      type: 'array',
      description: 'Welcome texts displayed on landing page.',
      of: [{type: 'string'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      documentTitle: 'documentTitle'
    },
    prepare(selection) {
      const {documentTitle} = selection
      return Object.assign({}, selection, {
        title: documentTitle
      })
    }
  }
}