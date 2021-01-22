import React from 'react';

const Gif = ( {gifId, clicked} ) => {
  
  const src = `https://media.giphy.com/media/${gifId}/giphy.gif`

  const handleclick = () => {
    clicked(gifId)
  }


  return (
    <img src={src} alt="" className='gif' onClick={handleclick}/>
  );
};

export default Gif;