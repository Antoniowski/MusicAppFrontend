import { useEffect, useState } from 'react'
import './App.css'
import SongRow from './components/SongRow'

function App() {


  const initValue: JSON[] = []  
  let [songArray,setSongArray] = useState(initValue);

  const songRows = songArray.map((song, index) => <SongRow key={index} name={song.name} album={song.album} duration={song.duration}/>)

  useEffect(() =>{
    fetch('http://localhost:8080/songs', {
      method: 'GET',
      mode: "cors",
      headers: {
        "Content-Type": "application/json"  
      }
    })
    .then(data => data.json())
    .then((x: JSON[]) => {
      setSongArray(x)
    }) 
  }, [])

  useEffect(() =>{
  }, [songArray])

  return (
    <>
      <div className='container'>
        {songRows}
      </div>  
    </>
  )
}

export default App
