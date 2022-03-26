import { list } from '@keystone-6/core'
import { text } from '@keystone-6/core/fields'

export const User = list({
    fields: {
        name: text({ validation: { isRequired: true } }),
        email: text({ isIndexed: true, validation: { isRequired: true }})
    }
})
