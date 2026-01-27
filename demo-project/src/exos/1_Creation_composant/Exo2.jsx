import style from "./Exo2.module.css";



export const Exo2 = (props) => {
  const { produit, isAvailable, name, price, promoPrice, text, image } = props;

  if (!isAvailable)
    return (
      <div className={style.noAvailable}>

        <div className={style.insiden}>
          <p>
            De quoi s'agit-il? {
              (produit === 'Chemise') ?

                (<span style={{fontWeight: 'bold'}}>  Pièce de dessus </span>) :
                (<span style={{fontWeight: 'bold'}}>  Pièce de dessous </span>)
            }
            
          </p>
          <p>
          <span style={{color: '', fontWeight: 'bold'}}>Nom du modèle </span> : {name}</p>
         
            <p>Disponibilité:             
            <span style={{color: '#cc0000', fontWeight: 'bold'}}>Indisponible ✘</span>
            </p>

          

          {image && <img width='250px' src={image} alt={name} />}
        </div>
      </div>


    );

  return (
    <div className={
      style.isAvailable
      + ' ' +
      ((produit === 'Chemise') ? style.chemise : style.pantalon)
    }>

      <div className={style.inside}>
        <p>
          De quoi s'agit-il?  {
            (produit === 'Chemise') ?

              (<span style={{fontWeight: 'bold'}}>  Pièce de dessus </span>) :
              (<span style={{fontWeight: 'bold'}}>  Pièce de dessous </span>)
          }
          <p> Détails du modèle: {text}</p>
        </p>
        <p><span style={{color: '', fontWeight: 'bold'}}>Nom du modèle </span> : {name}</p>
        <p>
          <p>
          <span style={{color: '', fontWeight: 'bold'}}>Prix </span> : {price.toFixed(2)}€</p>
            

          { promoPrice && <p><span style={{ fontWeight: 'bold'}}>Ce produit est en promotion</span> : <span style={{ fontWeight: 'bold', }} > {promoPrice.toFixed(2)} €</span></p> }
           
        </p>
        <p>Disponibilité : 
        <span style={{ fontWeight: 'bold'}}>Disponible ✔ </span>
                
        </p>
        

        {image && <img className={style.image} width='250px' src={image} alt={name} />}
      </div>
    
    </div>
    
  );

}
