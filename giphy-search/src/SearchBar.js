import React from 'react';


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
        this.searchHandler = this.searchHandler
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }
    //event=> is replacing with function(event){this.onInputChange(event.target.value);}
                    //<input placeholder2="Enter text for search for gif" onChange={event => this.onInputChange(event.target.value)} />
    render() {
        return (
            <div className="search">
                <input placeholder="Enter text for search for gif" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
