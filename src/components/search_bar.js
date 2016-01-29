import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {term: '' };
    }
    render() { // Es6 method syntax
        return (
            <div className="search-bar">
                <input
                    className="form-control"
                    value={this.state.term}// This turns the input into a controlled component
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;
