import React from 'react';

const AudioPlayer = ({ source }) => {
  if (source === null) {
    return <p>No preview available</p>
  }
  return (
    <audio src={source} className="col-sm-12" controls/>
  );
}

export default AudioPlayer
