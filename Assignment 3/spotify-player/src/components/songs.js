import React from 'react';
import Song from './song'

const Songs = props => {
  return (
    <div className="row" style={divStyle}>
      { renderSongs(props) }
    </div>
  )
}

const divStyle = {
  justifyContent: 'center'
}

const renderSongs = props => {
  if(props.songs.length === 0) return <p>{ props.instruction }</p>
  return <React.Fragment>{props.songs.map(song => <Song key={song.id} song={song}/>)}</React.Fragment>;
};

export default Songs
