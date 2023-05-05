import React from 'react'
import { Navbar } from './ui/components/Navbar'
import { PokemonsList } from './pokemons/components/PokemonsList'

export const PokeApp = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>PokeApp</h1>
                <PokemonsList />
            </div>
        </>
    )
}
