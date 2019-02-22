export const beersSearch = (state = '', action ) => {
    switch (action.type) {
        case `SEARCH_BEERS`:
            return action.text;
        default:
            return state
    }
};