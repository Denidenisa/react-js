import { useState } from "react"
import style from './Exo7.module.css'
import { Exo7Compteur } from "./Exo7Compteur"

export const Exo7ProjectProgress = () => {

  const [afficherBugs, setAfficherBugs] = useState(true)
  const [afficherFonctionnalites, setAfficerFonctionnalites] = useState(true)

  return (
    <div className={style.tout}>
      <h2 className={style.titre}>Progression du projet 📊 </h2>

      <button className={style.btnB} onClick={() => setAfficherBugs(!afficherBugs)}>{afficherBugs ? 'Cacher' : 'Afficher'} les bugs corrigés  </button>

      <button className={style.btnB}
        onClick={() => setAfficerFonctionnalites(!afficherFonctionnalites)}

      >
        {afficherFonctionnalites ? ' Cacher' : ' Afficher'}  les fonctionnalités ajoutées  </button>
      <h3 className={style.bF}>Bugs ✅</h3>
      {afficherBugs && <Exo7Compteur  name="Bugs Corrigés" />}
      <h3 className={style.bF}>Fonctionnalité ✅</h3>
      {afficherFonctionnalites && <Exo7Compteur  name="Fonctionnalités Ajoutées" />}
    </div>

  )
}

