const users = [
  {
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
  }
]

const posts = [
  {
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
  },
  {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
  },
  {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '2'
  }
]

const db = {
  users,
  posts
}

module.exports = {
  Query: {
    iTunesSearch: (_, { term }, { dataSources }) =>
      dataSources.iTunesSearchAPI.getITunesSearchResult({ term }),

      users: (parent, args, _, info) => {
        if (!args.query) {
          return db.users
        }
    
        return db.users.filter(user => {
          return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
      },
      
      posts: (parent, args, _, info) => {
        return db.posts.filter(post => {
          return post.author === parent.id
        })
      },

      post: () => {
        return {
          id: '092',
          title: 'GraphQL 101',
          body: '',
          published: false
        }
      }
  }
}