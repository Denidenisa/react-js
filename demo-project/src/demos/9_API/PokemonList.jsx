import { useEffect, useState } from 'react'
import style from'./Pokedex.module.css'
import axios from 'axios'

export const PokemonList = (props)=>{
  const{onPkmSelection}=props


  // Pour gérer les précédents et suivants
    // * Soit on fait un state pour offset et limit et l'avantage c'est qu'on peut changer comme on veut le nombre de pokemon qu'on récupère
    // * Soit on utilise les valeurs de base de l'API qui nous renvoie la requête précédente et la requête suivante

  const [prevRequest, setPrevRequest]=useState(null)
  const[nextRequest,setNextRequest]=useState(null)
  // Il nous faudra aussi une variable pour stocker les pkm affichés à l'écran
    // L'API va nous renvoyer un tableau qui ressemble à ceci 
    //  [ 
    //      { 
    //          name : "Nom du pokemon",
    //          url : "requête pour plus d'infos sur le pokemon"
    //      }, ...
    //  ]

  const[Pokemons,setPokemons]=useState([])
  // On va aussi créer un state au cas où une erreur survient
  const[error,setEroor]=useState('')
  // ! 👉🏼 Nous allons maintenant faire notre première requête qui va remplir la liste de pkm et les prev et next quand on arrive sur la page
    // On peut le faire avec fetch ou axios, je préfère axios donc on va l'installer (npm i axios)
    // eslint-disable-next-line react-hooks/exhaustive-deps


  useEffect(()=>{

      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((response)=>{
        console.log(response)
        // On va récupérer les deux requêtes et les stocker dans nos states
        setPrevRequest(response.data.previous)
        setNextRequest(response.data.next)
 // On rempli la liste des pkm avec la liste renvoyée par l'API
        setPokemons(response.data.results)

      })
      .catch((error)=>{
        console.log(error)
        setEroor('Oupsyyy 🤭😓 une erreur est survenue avec l\'API' )
      })

  },[])
  const getPokemons=(next)=>{
   
      axios.get(next? nextRequest:prevRequest)
           .then((response)=>{
            console.log(response.data)


            setPrevRequest(response.data.previous)
            setNextRequest(response.data.next)

            setPokemons(response.data.results)

           })
           .catch((error)=>{
            setEroor('Oupsyyy 🤭😓 une erreur est survenue avec l\'API' )
            
           })

    }
  
 
    return (
        <div className={style.list}>
            <h2>Liste des Pokemons</h2>
    <ul>
      {error &&<span>{error}</span>}
      {
        Pokemons.map(pokemon=>(<li onClick={()=>onPkmSelection(pokemon.name)} key={pokemon.name}>{pokemon.name} </li>))
      }

      </ul>

        <div className={style.buttons}>
            <button onClick={()=>{getPokemons(false)}}  disabled={!prevRequest}>⬅️Précédent</button>
            <button onClick={()=>{getPokemons(true)}} disabled={!nextRequest}> ➡️Suivant</button>
        </div>
   
   </div>
    )
}
 