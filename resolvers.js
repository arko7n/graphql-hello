module.exports = {
  Query: {
    hello: () => 'Hello world!',
    iTunesSearch: (_, { term }, { dataSources }) =>
    dataSources.iTunesSearchAPI.getITunesSearchResult({ term })
  }
}