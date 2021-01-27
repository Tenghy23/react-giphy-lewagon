import React from 'react';

const Gif = ( {gifId, clicked, setSelectedGif} ) => {
  
  const src = `https://media.giphy.com/media/${gifId}/giphy.gif`

  const handleclick = () => {
    setSelectedGif(gifId)
  }


  return (
    <img src={src} alt="" className='gif' onClick={handleclick}/>
  );
};

export default Gif;