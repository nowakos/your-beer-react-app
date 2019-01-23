import React from 'react';
import "./_beerList.scss"
import SingleBeer from "../SingleBeer/SingleBeer";

const BeerList = ({beers}) => (

        <ul className="beer-list">
            {beers.map(beer => (
                <SingleBeer key={beer.id} beer={beer} />
            ))}
        </ul>
    )





export default BeerList;

