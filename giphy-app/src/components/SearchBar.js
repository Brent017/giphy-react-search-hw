import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { 
            term: '' 
        }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search" class="ui input">
                <input onChange={event => this.onInputChange(event.target.value)} type="text" placeholder="Search..." />
            </div>

        );
    }
}

export default SearchBar;