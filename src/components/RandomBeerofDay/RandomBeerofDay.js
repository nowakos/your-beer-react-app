import React from 'react';
import "./_randomBeerofDay.scss";


class RandomBeerofDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objRandomBeer: this.getObjectBeer()
        }

    }

    getRandom = (min, max) => Math.floor((Math.random() * (max - min) + min));

    getObjectBeer = () => {
        const beerFromStorage = JSON.parse(localStorage.getItem('beer'));


        if (beerFromStorage) {
            return beerFromStorage
        } else {
            const beerFromProps = this.props.beerRandom[this.getRandom(0, this.props.beerRandom.length - 1)]


            localStorage.setItem('beer', JSON.stringify(beerFromProps))

            return beerFromProps
        }

    }


    render() {
        const {beerRandom} = this.props;

        if (beerRandom.length === 0 || beerRandom.length < 0) {
            return null;
        } else {
            return <section className="random-beer">
                <h2>Beer of day: <span>{this.state.objRandomBeer.name}</span></h2>

            </section>
        }

    }

}


export default RandomBeerofDay;
