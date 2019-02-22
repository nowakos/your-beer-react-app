export const getFilteredBeers = (beers, text) => {

    return beers.filter(beer => {

        return (
            beer.name.includes(text)

        );
    });
};