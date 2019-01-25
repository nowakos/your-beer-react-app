import React from 'react';
import "./_randomBeerofDay.scss";


class RandomBeerofDay extends React.Component {
    constructor(props) {
        super(props)

    }

    getRandom = (min, max) => Math.floor((Math.random() * (max - min) + min));

    render() {
        const {beerRandom} = this.props;

        if (beerRandom.length === 0 || beerRandom.length < 0) {
            return null;
        } else {
            return <section className="random-beer">
                <h2>Beer of day: <span>{beerRandom[this.getRandom(0, beerRandom.length - 1)].name}</span></h2>

            </section>
        }

    }

}


export default RandomBeerofDay;