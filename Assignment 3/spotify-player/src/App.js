import React, { Component } from 'react';
import NavBar from './components/navBar';
import SearchBar from './components/searchBar';
import Songs from './components/songs';
import './App.css';
import axios from 'axios';

class App extends Component {
  //const { title, artist, artistLink, photo, popularity, albumName, albumLink } = props
  state = {
    songs: [],
    search: ''
  }

  //GET https://api.spotify.com
  //Client ID: 314d98c513da4c0aa912f8722d7a6f50
  //Client Secret: 5a8b06b8e5b84d28a6edef4e0fb0af89
  searchSong = async () => {
    console.log("Here");

    try {
      let response = await axios.get('/tracks');
      console.log(response);
      await this.setState({
        songs: response,
        search: ''
      });
    } catch (error) {
      console.error(error);
    }
    
  }

  handleChange = ({ target }) => {
    this.setState({
      search: target.value
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar onSearch={ this.searchSong } onChange= { this.handleChange }/> 
        <Songs songs={ this.state.songs}/>
      </div>
    );
  }
}

export default App;
