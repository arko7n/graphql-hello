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
  
  # queries
  type Query {
    hello: String # Hello world query
    iTunesSearch(term: String!): [ITunesSearchResult]
  }
`

module.exports = typeDefs