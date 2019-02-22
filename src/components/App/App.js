import React, {Component} from 'react';
import './_app.scss';
import BeerList from "../BeerList/BeerList";
import Logo from "../Logo/Logo";
import RandomBeerofDay from "../RandomBeerofDay/RandomBeerofDay";
import {BeersFilterContainer} from "../SearchBar/SearchBar";
import {connect} from "react-redux";
import {beersFetched} from '../../actions'
import {getFilteredBeers} from "../../selectors/getFilteredBeers";

class App extends Component {
    state = {
        page: 1
    };


    componentDidMount() {
        this.getBeers(this.state.page)

    }

    getBeers = (page) => {

        fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=40`)
            .then(
                response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.log(response)
                    }
                }
            )
            .then(data => {
                this.props.beersFetched(data)
            })
    }

    handlerNext = () => {
        this.setState({
                page: this.state.page + 1
            }
        )
        this.getBeers(this.state.page)
    }

    handlerBack = () => {
        this.setState({
                page: this.state.page - 1
            }
        )
        this.getBeers(this.state.page)
    }

    render() {

        return (
            <main className='center'>
                <Logo/>
                <section className='container'>
                    <RandomBeerofDay beerRandom={this.props.beers}/>
                    <BeersFilterContainer/>
                    <BeerList beers={this.props.beers}/>
                    <div className='btn-move'>
                        <button className='btn back'
                                onClick={this.handlerBack} disabled={this.state.page === 1}>
                            <span>Back</span>
                        </button>
                        <button className='btn next'
                                onClick={this.handlerNext}
                                disabled={this.props.beers.length !== 40}><span>Next</span></button>
                    </div>
                </section>
            </main>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        beers: getFilteredBeers(state.beers, state.beersSearch)
    }
};
const mapDispatchToProps = {beersFetched};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);



