import { useEffect } from "react"

export const EtreVivant=(props)=>{
  const {etre}=props
  //useEffect est une fonction qui se déclenche quand le composant apparait à l'écran et qui déclenche la fonction mise en paramètre
  //cette fonction est la fonction exécutée quand notre composant prend vie (quand il apparait à l'écran)
  useEffect(()=>{
    console.log(etre.id+' est né 🐣')
// dans cette fonction, si on renvoie une fonction,c'est celle ci qui sera exécutée si le composant disparait de l'écran
    return()=>{
      console.log(etre.id+'Et il est mort 💀')
    }

  })
  return(
    <div>
      
        {etre.type === 'Humain'   && '👶🏻'}
        {etre.type === 'Animal'   && '🦁'}
        {etre.type === 'Bactérie' && '🦠'}
      
    </div>
  )
}