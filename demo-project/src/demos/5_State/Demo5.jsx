import { useState } from "react"

export const Demo5 = () => {
//Pour créér une variable;utiliser la Hook de State, faut l'importer de react
//useState() est une fonction qui :
// -renvoie un tableau avec 2 éléments
//* le premier élément sera la variable que vous souhaitez créer
//* le 2e élément sera la fonction qui premet de modifier cette variable et d'indiquer aue lle rendu doit se mettre à jour
// -peut prendre un paramètre qui sera la valeur initiale de votre variable.


const [count, setCount] = useState(0)
const [firstname, setFirstname] =useState('Roger')

const increment=()=>{
  //setCount(6)-> quand on veut setup avec une valeur fixe, on mettra juste la valeur dans les paramètres
  //utiliser le set avec une fonction fléch"e où on récupère la valeur précédente et on renvoie la nouvelle valeur 
  setCount((prev)=> prev+1 ) 
  // setCount((prev)=>{return prev+&})

}

const decrement =()=>{
  setCount((prev)=> prev-1 ) 

}

const crement = (value) =>{
  // si value contient +1, va faire une augmentation
  // si calue contient -1, va faire une diminution
  setCount((prev)=>prev+value)

}

  return(
    // mettre dans une fonction anonyme ()=>
    <div>
      <h2>La gestion du state :</h2>

    <div className="flex flex-row justify-center items-center gap-3">
        <button onClick={()=>crement(-1)}>➖</button>                 
        <p>{count}</p>
        <button onClick={()=>crement(1)}>➕</button>
    </div>
    <div className="flex flex-row justify-center items-center gap-3">
      <h3>Bienvenue {firstname}🤨</h3>
      <div className="flex flex-row justify-center items-center gap-3">

      </div>
      <div className="flex flex-row justify-center items-center gap-3">
      <button onClick={()=>setFirstname(prev=>prev.toLowerCase())}>🗣️🔉</button>
      <button onClick={()=>setFirstname(prev=>prev.toUpperCase())}>🗣️🔊</button>
      <button onClick={()=>setFirstname('Rogerina')}>🪄🔮👧🏻</button>
      <button onClick={()=>setFirstname('Roger')}>👦🏻🔙
        
      </button>
      </div>

      </div>
  </div>

  )
    
}
