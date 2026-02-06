import { useState } from 'react'
import style from './Pokedex.module.css'
import { Pokemon } from './Pokemon.jsx'
import { PokemonList } from './PokemonList.jsx'

export const Pokedex =()=>{
  const [pokemonName,setPkmName]=useState()
  const changeName=(name)=>{
    setPkmName(name)
  }




  return(
    
    <div className={style.container}>

      
        <PokemonList onPkmSelection={changeName}/>


        <Pokemon name={pokemonName}/>
        



      </div>
      

    
    
  )

}