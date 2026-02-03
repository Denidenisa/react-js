// composant "parent"
import style from "./Demo7.module.css"
import {useState}from 'react'
import { Demo7Child } from "./Demo7Child"
export const Demo7 = () => {

  //* Composant "parent"

  const [children,setChildren]=useState([
    
      {
        id:1, 
        name:'Re-Kev',
        skin:'👱🏻',
      adopted: false },
      {id:2,
         name:'Mini Kev',
         skin:'👦🏻',
         adopted: false },
      {id:3,
       name:'Petit Kev',
       skin:'👶🏻',
       adopted: false }

  ])

  // *On récupère l'id qui est émit lors du déclenchement de l'event onAdoptReveal
  const changeAdoptionStatus=(id)=>{
    
    const newChildren=children.map(child=>{
      if(child.id===id){
        child.adopted = true 
        return child
      }
      else{
        return child
      }
    })
    setChildren(newChildren)

  }
  return(
    <div className={style.parent}>
    <h2> Je suis Kevin De La Street ! </h2>
    <p> Voici la liste de mes enfants : </p>

    //* Pour envoyer des informations dans l'enfant, on passe par les props
                // *child est l'enfant qu'on veut envoyer au composant pour qu'il l'affiche
                // *chaque enfant, va pouvoir envoyer une information au parent, on fera également ça dans les props, en ajoutant une fonction comme props, en général, le nom qu'on donne commence par 'on'+ActionAFaire
    {
    children.map(child => <Demo7Child key={child.id}child={child} onAdoptReveal={changeAdoptionStatus}/>)
  }
    </div>
  )
  

}






