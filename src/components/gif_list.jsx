import React from 'react';
import Gif from './gif.jsx';

const Giflist = ( {listOfId} ) => {

  // gifs refer to an array of urls ,at start, list is empty
  // map to convert each url into a giphy
  return(
    <div className="gif-list">
      {listOfId.map(Id => <Gif gifId={Id} key={Id} /> )}
    </div>
  )
}

export default Giflist;
