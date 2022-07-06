import { EarthGlobeIcon } from '@sanity/icons'

export default {
  name: 'languages',
  title: 'Languages',
  icon: EarthGlobeIcon,
  type: 'document',
  fields: [
    {
      name: 'language',
      type: 'string',
      title: 'Language',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      language: 'language'
    },
    prepare(selection) {
      const {language} = selection
      return Object.assign({}, selection, {
        title: language
      })
    }
  }
}