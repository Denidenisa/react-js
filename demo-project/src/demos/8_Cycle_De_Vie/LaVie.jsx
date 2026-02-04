import { useEffect, useState } from "react"
import { EtreVivant } from "./EtreVivant"
import { EtreSpecial } from "./EtreSpecial"

export const LaVie=()=>{
  const[etreVivants, setEtreVivant]=useState([])
  const[montrerEtrepecial,setMontrer]=useState(false)

  const types=['Humain','Animal','Bactérie']
  useEffect(()=>{
    console.log('Et Dieu créa la Vidaaaa')
  })

  const naissance=()=>{
    const nouvelEtre={
      id:Date.now(),
      type: types[Math.floor(Math.random()*3)]

    }
    setEtreVivant([...etreVivants,nouvelEtre])

  }
  return(
    <div style={{padding:'2rem'}}>
      <h2> L'histoire de la vie </h2>
      <button onClick={naissance}> Faire naitre quelque chose </button>
      {
        etreVivants.map(etre=><EtreVivant key={etre.id} etre={etre}/>)
      }

      <h3>L'être spécial dont personne ne veut : (aka:ne faites jamais ça)</h3>
      <button onClick={()=>{setMontrer(!montrerEtrepecial)}}>Afficher le spécimen </button>
      {
        montrerEtrepecial && <EtreSpecial/>
      }

    </div>
  )
}