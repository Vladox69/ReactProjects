import React from 'react'
import { getBgType } from '../helpers/getBgType'

export const PokemonType = ({ type }) => {

    const bg = getBgType(type);
    return (
        <span className={`alert ${bg} p-0 me-2`}> {type} </span>
    )
}