import React from 'react'
import { PokemonType } from './PokemonType';

export const PokemonsCard = ({ poke }) => {
    const { id, pokemon, types } = poke;
    const urlImg = `/assets/pokemons/${id}.png`;
    const typesS=types.split(',');
    return (
        <div className="col-xl-4 col-sm-6 col-xs-12 my-2">
            <div className="card" >
                <img src={urlImg} className="card-img-top" alt={pokemon} />
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{pokemon}</h5>
                    <p className="card-text">
                        {typesS.map((t,i)=>( <PokemonType key={i+t} type={t} /> ))} 
                    </p>
                </div>
            </div>
        </div>
    )
}
