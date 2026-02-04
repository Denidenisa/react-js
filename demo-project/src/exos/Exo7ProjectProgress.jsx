import{useState}from "react"
import style from './Exo7.module.css'
import { Exo7Compteur } from "./Exo7Compteur"

export const Exo7ProjectProgress = ()=>{

    const [afficherBugs, setAfficherBugs]=useState(true)
    const[afficherFonctionnalites, setAfficerFonctionnalites]=useState(true)

    return(
        <div style={{padding:'2rem'}}>
            <h2>Progression du projet 📊 </h2>
            
            <button  className={style.btnB} onClick={()=>setAfficherBugs(!afficherBugs)}>{afficherBugs?'Cacher':'Afficher'} les bugs corrigés</button>
           
           <button  className={style.btnB}
          onClick={() => setAfficerFonctionnalites(!afficherFonctionnalites)}
         
        >
          {afficherFonctionnalites ? ' Cacher' : ' Afficher'}  les fonctionnalités ajoutées
        </button>
        {afficherFonctionnalites && <Exo7Compteur nom="Fonctionnalités ajoutées" />}
      </div>
   
  )
}

