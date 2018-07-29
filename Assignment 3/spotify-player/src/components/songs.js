import React from 'react';
import Song from './song'

const Songs = props => {
  return (
    <div className="row">
      { renderSongs(props) }
    </div>
  )
}

const renderSongs = props => {
  if(props.songs.length === 0) return <p>Search a Song!</p>
  return <React.Fragment>{props.songs.map(song => <Song key={song.id} song={song}/>)}</React.Fragment>;
};

export default Songs
