import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './gif.jsx';
import Giflist from './gif_list.jsx';
import giphy from 'giphy-api'

const App = () => {

  // gifs to store array of gif ids, selectedGif to store left-scene gif id
  const [gifs, setGifs] = useState([]);
  const [selectedGif, setSelectedGif] = useState('KZjw9Aigr4CloZx3Bv');

  // giphy api key
  const giphyKey = 'I93AfLS6L6jy4snBmEUeYSSpMZYayBuN'

  // Func search (code from api) provides search func for giphy, sets gif as a array of ids
  const search = (query) => {
    giphy(giphyKey).search({
      q: query,
      limit: 25
    }, (err, res) => {
      const resArray = res.data.map(hash => hash.id);
      setGifs(resArray)
      console.log(gifs);
    })
  };

  // anything inside renders UI
  return (
    <div>
      <div className="left-scene">
        {/* pass prop named searchFunc into SearchBar.jsx */}
        <SearchBar searchFunc={search}/>
        <div className="selected-gif">
          <Gif gifId={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        {/* pass prop named listOfID and setSelectedGif to Giflist.jsx */}
        <Giflist listOfId={gifs} setSelectedGif={setSelectedGif}/>
      </div>
    </div>
  );
};

export default App;