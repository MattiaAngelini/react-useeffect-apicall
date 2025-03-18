import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  // const [count, setCount] = useState(0)

  useEffect(() => {

    axios.get(`https://pokeapi.co/api/v2/pokedex/1`)
    .then(res => {
      const posts = res.data.pokemon_entries;
     console.log(posts);
    })
  
  },[]);

  return (
    
    <>
    <div></div>
    </>
  )
}

export default App
