import React, { Component } from 'react'
import pokemonArr from './../pokemonArr'
import './PokemonDisp.css'

class PokemonDisp extends Component{
    constructor(){
        super()
        this.state = {pokemonArr}
    }
    render(){
        return (
            <div className='PokemonDisp-wrapper'>
                <ul>

                    {
                        pokemonArr.map(pokemon => {
                            return (
                                <div className='PokemonDisp-container'>
                                <li><img src={pokemon.url} alt={pokemon.name}/>{pokemon.name}</li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default PokemonDisp