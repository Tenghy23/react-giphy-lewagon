import React from 'react';


const SearchBar = ( {searchFunc} ) => {

  // runs search func whenever key is pressed
  const handleUpdate = (event) => {
    searchFunc(event.target.value);
  }

  //renders a form which runs func handleUpdate upon any change in searchbar
  return (
    <input 
      type="text"
      className="form-control form-search"
      onChange={handleUpdate}
    />
  );
};

export default SearchBar;