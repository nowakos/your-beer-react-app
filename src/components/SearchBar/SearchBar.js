import React from 'react';
import "./_searchBar.scss"
import { connect } from "react-redux";
import { searchBeers } from '../../actions'

class BeersFilter extends React.Component {
    render() {
        return (
            <section className="search-bar">
                <div className="search-bar__text">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Write name of beer"
                        value={this.props.beersSearch}
                        onChange={this.handleSearchChange}
                    />
                    <i className="search icon"/>
                </div>
            </section>
        );
    }

    handleSearchChange = e => {
        this.props.searchBeers(e.currentTarget.value)
    };

}


const mapStateToProps = state => {
    return {
        beersSearch: state.beersSearch
    };
};

const mapDispatchToProps = { searchBeers };

export const BeersFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BeersFilter);




