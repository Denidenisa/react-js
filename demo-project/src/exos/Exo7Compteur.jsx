import { useEffect, useState } from "react"
import style from './Exo7.module.css'

export const Exo7Compteur = (deni) => {
  const [compte, setCompte] = useState(true)
  // const [premierRendu, setPremierRendu] = useState(true)
  const increment=()=>{
    setCompte(compte>0?compte-1:0)
  }
  const decrement =()=>{
    setCompte(compte+1)
  }
  useEffect(() => {
    console.log(`🐣Le compteur "${deni.name}" apparaît à l'écran`)
    const valeurSauvegardee = localStorage.getItem(`compteur_${deni.name}`)
    if (valeurSauvegardee !== null) {
      setCompte(Number(valeurSauvegardee))  
      console.log(`Valeur restaurée pour "${deni.name}:${valeurSauvegardee}"`)
     }
    // setPremierRendu(false)
    return () => {
      console.log(`Le compteur "${deni.name}" disparaît de l'écran`)
    }

  }, [deni.name])
  useEffect(() => {
    // if (!premierRendu) {
    //   localStorage.setItem(`compteur_${deni.name}`, compte)
    //   console.log(`💾 Sauvegarde de "${deni.name}": ${compte}`)
    // }
  }, [compte, deni.name])
  //}, [compte, deni.name, premierRendu])

  return (
    <div>
      <h3 className={style.titleH3}>{deni.name}: {compte}</h3>
      <button  className={style.charger}onClick ={increment}>➖ 1</button>
      <button  className={style.charger} onClick={decrement}>➕ 1</button>
    </div>
  )
}
















































































































