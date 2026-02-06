import { useEffect, useState } from "react"

export const EtreSpecial=()=>{
  const[age,setAge]=useState(0)
  const[anniversaires, setAnniversaires]=useState()
  //!useEffect prend en paramètre 2 choses 
  //! la fonction a exécuter quand le useEffect est déclenché
  //!les dépendances  qui autorisent le useEffect  à se déclencher.   c'est un tablau et s'il est vide, rien n'autorise le useEffect a se re-déclencher
  useEffect(()=>{
    setAge(prev=>prev+1)
    console.log('L\'être spécial est "né')
    return()=>{
      console.log('L\'être spécial est mort 💀')

    }
  },[anniversaires] )
  return(
    <div>
      Ma maman elle dit que je suis une chimera, le Roi des fourmis 🐜
      J' {age} ans.
      <button  onClick={()=>setAnniversaires(prev=>prev+1)}>C'est mon anniversaier !</button>

    </div>
  )
}

