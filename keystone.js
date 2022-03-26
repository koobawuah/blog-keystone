import { config } from '@keystone-6/core';
import { User, Post } from './schema';

export default config({
    db: {
        provider: 'sqlite',
        url: 'file:./keystone.db',
    }, 
    lists: {
        User,
        Post,
    },
})
