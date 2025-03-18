import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [pokemons, setPokemon] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokedex/1") 
      .then(res => {
        const posts = res.data.pokemon_entries;
        setPokemon(posts);  
        console.log(pokemons) //vuoto perchè - il programma va avanti prima dei risultati chiamata. (fetch è asincrona)
           //Quindi Creare secondo useEffect per quando array si riempie
      })
      .catch(error => console.error("Errore nel caricamento dei dati:", error));
  }, []);

  useEffect(() => { // use Effect per quando sono arrivati i dati della chiamata
    console.log(pokemons)
  }, [pokemons]);

  return (
    <>
    <h1>POKEMON NAMES:</h1>
    <ul>
      {pokemons.map((pokemon,index)=> 
        <li key={index}> ID: {pokemon.entry_number} - {pokemon.pokemon_species.name} </li>
     )}
    </ul>
    </>
  )
}

export default App
