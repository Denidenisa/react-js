

// Import fichier module css
// Quand on importe un module, on a accès un objet dans lequel il y aura toutes les classes
import style from './Exo1.module.css';

export const Exo1Component = (props) => {
  
    
    const { name,  age = 18   } = props;

    return (
        <>
        <p className={style['gros-text']}>Bienvenue,  {name}  sur l'application React </p>
       
        
        <p className={style['petit-text']}>Vous avez {age}ans  </p>
        </>
    );
}
