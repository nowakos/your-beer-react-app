import React from 'react';
import "./_searchBar.scss"
import PropTypes from "prop-types";


class SearchBar extends React.Component {
    static propTypes = {
        onSearch: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            textFilter: ""
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.textFilter.length > 0 && this.state.textFilter.length === 0) {
            this.searchBeer();
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    searchBeer = () => {
        this.props.onSearch(this.state.textFilter);
    };

    render() {
        return (
            <section className="search-bar">
                <div className="search-bar__text">
                    <input
                        className="form-control"
                        type="text"
                        name="textFilter"
                        placeholder='Write name of beer'
                        value={this.state.textFilter}
                        onChange={this.changeHandler}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                this.searchBeer();
                            }
                        }}
                    />
                    <button className="btn search" onClick={this.searchBeer}>
                        <span>Search</span>
                    </button>
                </div>
            </section>
        );
    }
}


export default SearchBar;

