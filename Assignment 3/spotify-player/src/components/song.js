import React from 'react';

const Song = props => {
  const { song } = props.song;
  return (
    <div className="card">
      <img className="card-img-top" src={ song.album.images[0].url } alt={ song.name }/>
      <div className="card-body">
        <h5 className="card-title">{ song.name }</h5>
        <h6 className="card-subtitle mb-2 text-muted">Album: { song.album.name } Artist: { song.artists.name }</h6>
        <p className="card-text">Popularity: { song.popularity }</p>
        <a href={ song.artists.external_urls.spotify } className="card-link">Artist</a>
        <a href={ song.album.external_urls.spotify } className="card-link">Album</a>
      </div>
    </div>
  )
}

export default Song
