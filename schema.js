const { gql } = require('apollo-server-lambda')

const typeDefs = gql`
  # iTunes search schema
  type ITunesSearchResult {
    id: String!
    kind: String
    trackId: String
    trackName: String
    artistId: String
    artistName: String
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
  }

  # queries
  type Query {
    iTunesSearch(term: String!): [ITunesSearchResult]
    users(query: String): [User!]!
    posts(query: String): [Post!]!  
    post: Post!
  }
`

module.exports = typeDefs