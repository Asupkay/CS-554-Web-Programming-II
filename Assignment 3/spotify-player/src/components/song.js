import React from 'react';
import AudioPlayer from './audioPlayer'

const link = {
  color: 'blue',
}

const header2Size = {
  fontSize: '2.0em'
}

const header3Size = {
  fontSize: '1.2em'
}

const Song = props => {
  const { song } = props;
  return (
    <div className="card col-12 col-md-6 col-lg-4">
      <img className="card-img-top" src={ song.album.images[0].url } alt={ song.name }/>
      <div className="card-body">
        <h2 className="card-title" style = { header2Size }>{ song.name }</h2>
        <h3 className="card-subtitle mb-2 text-muted" style = { header3Size }>Album: { song.album.name } Artist: { song.artists[0].name }</h3>
        <p className="card-text">Popularity: { song.popularity }</p>
        <a href={ song.artists[0].external_urls.spotify } className="card-link" style={ link }>Artist</a>
        <a href={ song.album.external_urls.spotify } className="card-link" style = { link } >Album</a>
        <AudioPlayer source={ song.preview_url }/>
      </div>
    </div>
  )
}

export default Song
