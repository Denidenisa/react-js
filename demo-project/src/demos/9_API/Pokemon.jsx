import { useEffect, useState } from 'react'
import style from './Pokedex.module.css'
import axios from 'axios'
 
export const Pokemon = (props)=>{
  const{name}=props
const[pokemon, setPokemon]=useState()
useEffect(()=>{
  
  if(name){
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then((response)=>{
    console.log(response.data)

    setPokemon({
      height: response.data.height *10,  //pour avoir la taille en cm
      weight:response.data.weight /10,   //pour avoi rle poids en kg
      image:response.data.sprites.other.showdown.front_default,//image qui bouge
      types:response.data.types.map(type=>type.type.name),//on récupére le tabmeau,qu'on map pour obtenir un tableau avec juste les noms des types
      cries:response.data.cries.legacy  //latest
    })

  })
  .catch((error)=>{

  })
}
},[name])
  //chaque fois que le nom va changer, on va déclencher un effet qui va faire la requête pour avoir les informations de ce pokemon pour les afficher

    // si la props name est undefined ou null, on va afficher un message

  if(!name){
     // si la props name est remplie, on va afficher les infos du pokemon
    return(
    <div className={style.pkm}>
      <p> Cliquez sur un pokemon pour voir ses informations 😁 </p>
    </div>
  )
        
  }
    return (
      
         <div className={style.pkm}>
          
          <h2>{name}</h2>
          <img src={pokemon?.image}alt={`image qui bouge représentant le pokemon ${name}`}/>
          
          <p>Poids:{pokemon?.weight} Kg</p>
          <p>Taille:{pokemon?.height} Cm </p>
        <h3>Type(s)</h3>
          <p>
            
            {
              pokemon?.types.map(type=>(<span>{type}</span>))
              
            }
          </p>
          <audio src={pokemon?.cries}controls/>
        
 
            </div>
    )
}