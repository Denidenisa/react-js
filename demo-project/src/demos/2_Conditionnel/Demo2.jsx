
import style from './Demo2.module.css';
export const Demo2 =(props)=>{
  const {owner,havePet,name,image,type}=props

  if(!havePet){
    return (
        <div className={style.nopet}>
            <p>Oh non {owner} ! Vous ne possédez pas d'animal ? 😢</p>
            <a href="https://www.1030.be/fr/cimetiere-communal/">Cliquez-ici pour en adopter un !</a>
        </div>
    )
}
// Sinon, s'il a un animal, on aura ce rendu là
return (
    <div className={style.pet+' '+((type==='chat')?style.cat:style.dog)}>
        <div className={style.inside}>
        <p>Ohlala {owner} ! Dis-m'en plus sur ton animal 👀 !</p>
        
        <p> Votre animal est un {(type ==='chat')?
        (<span>🐈‍⬛</span>):
        (<span>🐈</span>)} </p>

        <p>Son petit nom est : <span> {name||'Inconnu'} </span></p>
        {image && <img width='150px' src={image} /> }
             </div>
        </div>
   
)
}
