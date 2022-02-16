import React, { useEffect, useState } from 'react'
import Pokedex from '../components/Pokedex'
import { getPokemonData, getPokemons, searchPokemon } from '../api/pokeapi';


function Test2() {
  
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState()
  const [total, setTotal] = useState(0);



  const fetchPokemons = async() =>{
    try {
        setLoading(true)
        const data = await getPokemons(12, 12 * page)
        const promises = data.results.map(async (pokemon)=>{
            return await getPokemonData(pokemon.url)   
        })
        const results = await Promise.all(promises)
        setPokemons(results)
        setLoading(false)
        setTotal(Math.ceil(data.count / 12))
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])

  return (
    <div className='pokedex-content container'>
      <div className='head-pokeapi'>
        <h1 className='title'>POKEAPI</h1>
      </div>
      <Pokedex 
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        total={total}
        loading={loading}
      />
    </div>
  )
}

export default Test2