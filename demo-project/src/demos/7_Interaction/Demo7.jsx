// composant "parent"
import style from "./Demo7.module.css"
import {useState}from 'react'
import { Demo7Child } from "./Demo7Child"
export const Demo7 = () => {

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
    {
    children.map(child => <Demo7Child key={child.id}child={child} onAdoptReveal={changeAdoptionStatus}/>)
  }
    </div>
  )
  

}