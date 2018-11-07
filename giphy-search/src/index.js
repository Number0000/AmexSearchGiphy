import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import SearchBar from './SearchBar';
import GifList from './GifList';
import request from 'superagent';
import GifModal from './GifModal';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            gifs: [],
            selectedGif: null,
            modalIsOpen: false
        }
    }

    modalOpen(gif){
        this.setState({
            modalIsOpen: true,
            selectedGif: gif
        });
    }

    modalClose(){
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        });
    }

    handleTermChange = (term) => {
        //base url, http://api.giphy.com/v1/gifs/search?q=
        //term to Search
        //api_key, uJjgjiAOSGVI4KWkXSUyLWfsD3177v0Z
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=uJjgjiAOSGVI4KWkXSUyLWfsD3177v0Z`;
        request.get(url, (err, res) => {
            //console.log(res.body.data[0]);
            this.setState({ gifs: res.body.data })
        });
    }

    render(){
        return (
            <>
                <nav class="navbar navbar-inverse">
                      <div class="container-fluid">
                            <div class="navbar-header">
                                <h1> Welcome here to React Search Giphy</h1>
                            </div>
                      </div>
                </nav>
                <div class= "searchbar SearchBar">
                    <div class="container-fluid">
                        <SearchBar onTermChange={this.handleTermChange} />
                    </div>
                </div>
                <div>
                    <GifList gifs = {this.state.gifs}
                             onGifSelect = {selectedGif => this.modalOpen(selectedGif) }/>
                    <GifModal modalIsOpen = {this.state.modalIsOpen}
                            selectedGif = {this.state.selectedGif}
                            onRequestClose = { () => this.modalClose() }/>
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
