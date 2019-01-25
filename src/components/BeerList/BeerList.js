import React from 'react';
import "./_beerList.scss"
import SingleBeer from "../SingleBeer/SingleBeer";


const BeerList = ({beers, children}) => (
    beers.length > 0 ? (
        <section className='show-beer'>
            <ul className='beer-list'>
                {beers.map((beer, index) => (
                    <SingleBeer key={beer.id} beer={beer}/>

                ))}
                {children}
            </ul>
        </section>
    ) : (<div className='notFound'>
            <div>Beer not found</div>
        </div>

    )
);


export default BeerList;




