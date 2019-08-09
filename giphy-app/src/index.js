import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: []
        }
    };

    handleTermChange = (term) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=w5JYwpcHHLxJ7pt2sgYWh00JDBEJdzVX`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    };

    render() {
        return (
            <div>
            	<h1>Search The Giphy Library!</h1>
                <SearchBar onTermChange={this.handleTermChange} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));