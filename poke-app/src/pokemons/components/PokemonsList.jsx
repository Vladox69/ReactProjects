import React from 'react'
import { PokemonsCard } from './PokemonsCard'
import { pokemons } from '../data/pokemons'

export const PokemonsList = () => {

  return (
    <div className='row'>
      {
        pokemons.map(poke => (
          <PokemonsCard key={poke.id} poke={poke} />
        ))
      }
    </div>
  )
}
