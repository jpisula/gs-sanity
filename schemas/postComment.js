import { CommentIcon } from '@sanity/icons'

export default {
    name: 'postComment',
    type: 'document',
    title: 'Post Comment',
    icon: CommentIcon,
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        title: 'Approved',
        name: 'approved',
        type: 'boolean',
        description: "Comments won't show on the site without approval"
      },   
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'comment',
        type: 'text',
      },
      {
        name: 'post',
        type: 'reference',
        to: [
          {type: 'post'}
        ]
      }
    ],
    preview: {
      select: {
        name: 'name',
        comment: 'comment',
        post: 'post.title'
      },
      prepare({name, post}) {
        return {
          title: `${name}`,
          subtitle: `on ${post}`
        }
      }
    }
  }
  