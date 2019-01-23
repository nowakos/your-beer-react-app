import React from 'react';
import "./_singleBeer.scss"

const SingleBeer = ({beer}) => (
    <li className="single-beer">
        <div className="single-beer-img" style={{backgroundImage: `url(${beer.image_url})`}}></div>
        <div className='single-beer-name'>{beer.name}</div>
        <div className="single-beer-desc">
            {beer.description}
        </div>
        <div className="single-beer-brew-sheet">
            <ul>
                <li id="abv">ABV: {beer.abv}%</li>
                <li id="ibu">IBU's: {beer.ibu}</li>
                <li id="malts">Malts: {beer.ingredients.malt.map(malt => (malt.name)+'/')} </li>
                <li id="hops">Hops: {beer.ingredients.hops.map(hops => (hops.name)+'/')}</li>
            </ul>
        </div>
    </li>

)




export default SingleBeer;

