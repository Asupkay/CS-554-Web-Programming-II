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
    search: '',
    instruction: 'Search a song!'
  }

  //GET https://api.spotify.com
  searchSong = async () => {
    try {
      let response = await axios.get(`/tracks?songName=${this.state.search}`);
      if (response.data.tracks.items.length === 0) {
        this.setState({
          instruction: 'No songs found'
        });
      }
      await this.setState({
        songs: response.data.tracks.items,
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
      <React.Fragment>
        <NavBar />
        <article className="container">
          <SearchBar onSearch={ this.searchSong } onChange= { this.handleChange } search = { this.state.search }/> 
          <Songs songs={ this.state.songs } instruction={ this.state.instruction }/>
        </article>
      </React.Fragment>
    );
  }
}

export default App;
