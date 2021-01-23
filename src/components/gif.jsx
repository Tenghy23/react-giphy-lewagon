import React from 'react';

// destructuring the props using ({gifId, setSelectedGif}) instead of (props)
const Gif = ( {gifId, setSelectedGif} ) => {
  
  // create func handleclick to set the gif on the left-scene 
  const handleclick = () => {
    setSelectedGif(gifId)
  }

  const src = `https://media.giphy.com/media/${gifId}/giphy.gif`

  return (
    // renders each img tag with onClick attr to run handleclick func
    <img src={src} alt="" className='gif' onClick={handleclick}/>
  );
};

export default Gif;