import React from 'react';
import Gif from './gif.jsx';

// destructuring the props using ({listOfId, setSelectedGif}) instead of (props)
const Giflist = ( {listOfId, setSelectedGif} ) => {

  // maps the array of ids (listofId) into <Gif /> component 
  return(
    <div className="gif-list">
      {/* you need both gifId and setSelectedGif prop as they are part of the gif component */}
      {/* set key prop to id to remove the console error showing */}
      {listOfId.map(id => <Gif gifId={id} key={id} setSelectedGif={setSelectedGif}/> )}
    </div>
  )
}

export default Giflist;
