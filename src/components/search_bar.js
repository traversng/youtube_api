import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {term: '' };
    }
    render() { // Es6 method syntax
        return (
            <div>
                <input
                    value={this.state.term}// This turns the input into a controlled component
                    onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }

}

export default SearchBar;
