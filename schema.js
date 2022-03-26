import { list } from '@keystone-6/core'
import { relationship, text } from '@keystone-6/core/fields'

export const User = list({
    fields: {
        name: text({ validation: { isRequired: true } }),
        email: text({ isIndexed: true, validation: { isRequired: true }}),
        posts: relationship({ ref: 'Post.author', many: true }),
    }
})
 

export const Post = list({
    fields: {
        title: text(),
        author: relationship({ ref: 'User.posts', ui: {
            displayMode: 'cards',
            cardFields: [ 'name', 'email' ],
            inlineCreate: { fields: [ 'name', 'email' ] },
            linkToItem: true,
            inlineEdit: { fields: [ 'name', 'email' ] },
        },})
    }
})
