import React from 'react';

const search = {
  color: '#0F0F0F'
}

const SearchBar = props => {
  return (
    <div className="input-group mb-3 mt-3">
      <input type="text" className="form-control" placeholder="Song Name" aria-label="Song Name" aria-describedby="basic-addon2" onChange={ props.onChange } value= { props.search } />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={props.onSearch} disabled={!props.search} style={ search }>Submit</button>
      </div>
    </div>
  );
}

export default SearchBar
