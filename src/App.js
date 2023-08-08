
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavSearchBar from './components/NavBar'
import { musicData } from './Data.js';
import MusicCard from './components/MusicCard'
import { useEffect, useState } from 'react';

function RenderData({ data}) {
  return data.map(music => <MusicCard
    artist={music.artist}
    genre={music.genre}
    year={music.year}
    albumName={music.albumName} />)
  
}

function App() {
  const [keyWord, setKeyWord] = useState("");
  const [data, setData] = useState(musicData)

  useEffect(() => {
    const dataResult = data.filter(album => album.albumName.includes(keyWord))
    console.log("test", { dataResult })
    setData(dataResult)
  }, [keyWord])
  
  console.log(keyWord, data)
   
  // console.log(musicData)
  return (
    <div className="App">
      <NavSearchBar data={ data}  keyWord={keyWord} setData={setData }  setKeyWord={setKeyWord } />
      <ul>
        <RenderData data={ data} />
      </ul>
    </div>
  );
}

export default App;
