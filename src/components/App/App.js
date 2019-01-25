import React, {Component} from 'react';
import './_app.scss';
import BeerList from "../BeerList/BeerList";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import RandomBeerofDay from "../RandomBeerofDay/RandomBeerofDay"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            cachedBeers: [],
            page: 1
        };
    }

    componentDidMount() {
        this.getBeers(this.state.page)
        
    }

    getBeers = (page) => {

        fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=40`).then(
            response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log(response)
                }
            }
        ).then(data => {
            console.log(data);
            this.setState({
                beers: data,
                cachedBeers: data
            })
        })
    }

    filterBeersByText = textFilter => {
        if (textFilter.trim().length === 0) {
            this.setState({beers: this.state.cachedBeers});
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
        const {beers, cachedBeers} = this.state;
        return cachedBeers.length > 0 ? (
            <main className='center'>
                <Logo/>
                <section className='container'>
                    <RandomBeerofDay beerRandom={beers}/>
                    <SearchBar onSearch={this.filterBeersByText}/>
                    <BeerList beers={beers}/>
                    <div className='btn-move'>
                        <button className='btn back' onClick={this.handlerBack} disabled={this.state.page === 1}>
                            <span>Back</span>
                        </button>
                        <button className='btn next' onClick={this.handlerNext}
                                disabled={this.state.beers.length !== 40}><span>Next</span></button>
                    </div>
                </section>
            </main>

        ) : (
            <div className="loader">
                <span>Loading data</span>
            </div>
        );

    }
}


export default App;
