import './App.css'
import { Demo1Component } from './demos/1_Bases_Component/Demo1Component'
import { Exo1Component } from './exos/1_Creation_composant/Exo1_component'
import {Demo2} from './demos/2_Conditionnel/Demo2'
import {Exo2} from './exos/1_Creation_composant/Exo2'
import { Demo3 } from './demos/3_Collections/Demo3'
import { Exo3 } from './exos/1_Creation_composant/Exo3'
import { Demo4 } from './demos/4_Events/Demo4'
import { Demo5 } from './demos/5_State/Demo5'
import { Exo4 } from './exos/1_Creation_composant/Exo4'
import { Demo6 } from './demos/6_Formulaires/Demo6'
import { Demo6Bis } from './demos/Demo6_Formulaires/Demo6bis'
import { Demo6Lib } from './demos/6_Formulaires/Demo6Lib'
import { Exo5 } from './exos/1_Creation_composant/Exo5'




function App() {

  return (
    <>
      {/* <p>{ new Date().toLocaleDateString('fr') }</p>

      <Exo2 produit="Chemise" isAvailable={true}
      name="Cendre Moderne" text="Chemise manches courtes en cendre moderne,pensée pour un style urbain et polyvalant. Sa couleur subtile s'adapte facilement à toutes les tenues."
      price={45.50} 
      promoPrice={null}
      image="https://images.unsplash.com/photo-1693443688057-85f57b872a3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <Exo2 produit="Chemise" isAvailable={false}
      name="Bleu Minuit" text="Chemise manches courtes bleu minuit au caractère élégant et profond. Un essentiel du dressing qui offre une allure sobre et affirmée" 
      price={45.50}
      promoPrice={null}
      image="https://images.unsplash.com/photo-1713881649391-a1c8ddaf83cd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <Exo2 produit="Chemise" isAvailable={true}
      name="Crème Urbaine" text="Chemise manches courtes crème urbaine,au rendu doux et lummineux;Sa teinte écru apporte une touche naturelle et raffinée."
       price={45.50} 
      promoPrice={null}
      image="https://images.unsplash.com/photo-1713881587420-113c1c43e28a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

<Exo2 produit="Pantalon" isAvailable={true}
      name="Terra Set" text="Lot  de pantalons au teintes naturelles comprenant un modèle blanc cassé,un beige et un marron foncé. Conçus pour offrir confort et liberté de mouvement."
       price={60} 
      promoPrice={54}
      image="https://images.unsplash.com/photo-1715233749622-3216fe49e682?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}

      
      
      {/* <Demo2 owner="Levaï" havePet={false}  54/>
      
      
      
      
      <Demo2 owner="Tucker" havePet={true}
      name="Nina" image="https://ih1.redbubble.net/image.5454463351.8158/raf,360x360,075,t,fafafa:ca443f4786.jpg" type="chien"/>

      
      <Demo2 owner="Miyo" havePet={true}
      name="kento"  image="https://www.ecranlarge.com/content/uploads/2020/06/loin-de-moi-pres-de-toi-photo-1182898.png" type="chat"/>




    <Demo2 owner="Nethanyaou" havePet={true}
      name="Trump" image="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTu-GSY_bXjggu92Go8I0Od4bEoIE-RnSuaCRmN5xcL4lfSDQI169Wyg5hK0VegSLUJjpqlG47veDZ33C0" type="chien"/>

 */}


      
      {/* Si vous souhaitez envoyer une chaine dans les props "". Si vous souhaitez envoyer autre chose, il faudra mettre les {} */}
      {/* <Demo1Component name="HTML" type="Front-End" difficulty={1} />

      <Demo1Component name="Express" type="Back-End" difficulty={5} />

      <Demo1Component /> */}
{/*       
        <Exo1Component name="Macron"  age={48} />
        <Exo1Component name="Brigitte"  />
         */}


      
      {/* <Demo3></Demo3> */}
      {/* <div>
      <Exo3 />  
    </div> */}
    {/* <div>
      <Demo4 />  
    </div> */}
     {/* <div>
      <Demo5 />  
    </div> */}
     {/* <div>
      <Exo4 />  
    </div>  */}
     
      {/* <Demo6 />   */}

      {/* < Demo6Bis />   */}

        {/* <Demo6Lib/> */}
        <Exo5/>
        
    
    </>
  )
}


export default App