import React, { Component } from 'react';
import NavBar from './components/navBar';
import SearchBar from './components/searchBar';
import Songs from './components/songs';
import './App.css';

class App extends Component {
  //const { title, artist, artistLink, photo, popularity, albumName, albumLink } = props
  state = {
    songs: [{
              id: 1,
              title: "The beat", 
              artist: "The beats", 
              artistLink:"www.google.com", 
              photo:"https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350", 
              popularity: 5, 
              albumName: "Alex", 
              albumLink: "www.facebook.com"}]
  }

  searchSong = () => {
    console.log("Here");
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar onSearch={ this.searchSong } /> 
        <Songs songs={ this.state.songs}/>
      </div>
    );
  }
}

export default App;
