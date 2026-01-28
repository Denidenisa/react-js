import { useState } from "react"

export const Demo6Bis = () => {
    // 👉🏻 Un state de type objet qui représente tout le formulaire
    const [splitForm, setSplitForm] = useState({
        bill : 0,
        nbPerson : 0,
        tips : 5
    });

    const [isValid, setIsValid] = useState(true);
    const [totalPerPerson, setTotalPerPerson] = useState();

    const handleField = (event) => {
        // console.log(event);
        // Dans event, nous avons des informations sur le champs qui vient de déclencher l'évènement
        const name=event.target.name
        console.log(name);
        const type=event.target.type /* le nom du champs */
        console.log(type); /* le type du champs (number,text, password) */
        setSplitForm(prev=>{
          const newSpltForm={
            ...prev, //on récuére tout cz qui se trouve déjà dans prev, c'est à dire dans splitForm
            //enusite , on modifie juste la propriété qui nous interesse
            [name]:(type ==='checkbox')? 
                            event.target.checked :
                             (type === 'number')?
                             event.target.valueAsNumber:
                             event.target.value
//si le type du champ est une checkbox,la valeur se trouve dans la propriété checked et est un booléen
//si le type du champ est number,on va parse la valeur en nombre
//si ni l'un, ni l'autre, on prend la valeur telle quelle
           
          }
          return newSpltForm
          //ou return { ... }
          
        })             
    }
    const handleSubmit=(event)=>{
      event.preventDefault()
      setTotalPerPerson(undefined)

      if(splitForm.bill > 0 && splitForm.nbPerson > 0){          
        setTotalPerPerson( (splitForm.bill + (splitForm.bill * splitForm.tips/100)  ) / splitForm.nbPerson );
        setIsValid(true);
    }
    else {
        setIsValid(false);
    }
    }
    return (
         <div>
            <h2>Split'O Resto</h2>
        
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="bill">Total de la note :</label>
                    <input id="bill" name="bill" type="number" value={splitForm.bill} onChange={handleField}/>
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre de personnes :</label>
                    <input id="nbPerson" name="nbPerson" type="number" value={splitForm.nbPerson} onChange={handleField}/>
                </div>

                <div>
                    <label htmlFor="tips">Pourboire :</label>
                    <select id="tips" name="tips" value={splitForm.tips} onChange={handleField}>
                        <option value={0}>Aucun</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

                <button>Spliter 💸</button>
                {
                   !isValid && <span>⚠️ Vous devrez mettre une note et un nombre de personnes positif</span>
                }
            </form>

            { totalPerPerson &&  
                <div>Vous devrez chacun·e payer : {totalPerPerson.toFixed(2)} €</div>
            }
        </div>
    )
}