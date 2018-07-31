import React from 'react';

const SearchBar = props => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Song Name" aria-label="Song Name" aria-describedby="basic-addon2" onChange={ props.onChange }/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={props.onSearch}>Submit</button>
      </div>
    </div>
  );
}

export default SearchBar
