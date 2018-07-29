import React from 'react';

const Song = props => {
  console.log(props);
  const { title, artist, artistLink, photo, popularity, albumName, albumLink } = props.song
  return (
    <div className="card">
      <img className="card-img-top" src={ photo } alt={ albumName }/>
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <h6 className="card-subtitle mb-2 text-muted">Album: { albumName } Artist: { artist }</h6>
        <p className="card-text">Popularity: { popularity }</p>
        <a href={ artistLink } className="card-link">Artist</a>
        <a href={ albumLink } className="card-link">Album</a>
      </div>
    </div>
  )
}

export default Song
