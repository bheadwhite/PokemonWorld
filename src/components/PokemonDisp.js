import React, { Component } from 'react'
import pokemonArr from './../pokemonArr'
import './PokemonDisp.css'


class PokemonDisp extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className='PokemonDisp-wrapper'>

                    {
                        pokemonArr.sort((a,b) => a.number - b.number).map(pokemon => {
                            //trying to find out how to start a new line \n for different generation of pokemon categories.
                            if(pokemon.name === "Mew"|| pokemon.name === "Celebi" || pokemon.name === "Spiritomb" || pokemon.name === "Genesect"){
                            return (
                                    <div className='PokemonDisp-container margin' >
                                    <img src={pokemon.url} alt={pokemon.name}/>
                                    {pokemon.name}
                                    </div>)
                            }
                            return (
                                <div className='PokemonDisp-container'>
                            <img src={pokemon.url} alt={pokemon.name}/>
                            {pokemon.name}
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}


export default PokemonDisp