export const beersFetched = (beers) => ({
  type: 'FETCHED_BEERS_SUCCESS',
  beers
});

export const searchBeers = (text) => ({
  type: `SEARCH_BEERS`,
  text
})