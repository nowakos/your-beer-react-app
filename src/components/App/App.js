import React, { Component } from 'react';
import './App.css';
import BeerList from "../BeerList/BeerList";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            cachedBeers: [],
        };
    }

    componentDidMount() {
        fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=80`).then(
            response => {
                if(response.ok){
                    return response.json();
                }else{
                    console.log(response)
                }
            }
        ).then(data =>{
            console.log(data);
            this.setState({
                beers: data,
                cachedBeers: data
            })
        })
    }

    filterBeersByText = textFilter => {
        if (textFilter.trim().length === 0) {
            this.setState({ beers: this.state.cachedBeers });
        } else {
            const beers = this.state.cachedBeers.filter(beer =>
                beer.name
                    .toLowerCase()
                    .trim()
                    .includes(textFilter.toLowerCase().trim())
            );
            this.setState({
                beers
            });
        }
    };



    render() {
        const { beers } = this.state;
        return (
            <div >
                <Logo/>
                <SearchBar onSearch={this.filterBeersByText}/>
                <BeerList beers={beers}/>
            </div>

        )

    }
}


export default App;