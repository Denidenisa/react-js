import { useState } from "react"
import { useForm } from "react-hook-form";

// Gestion formulaire avec librairie
// 🗒️ Celle que nous allons utiliser est React-Hook-Form 
//      https://react-hook-form.com/

// Pour l'installer dans le projet : dans la console, tapez npm i react-hook-form
export const Demo6Lib = () => {
    const [totalPerPerson, setTotalPerPerson] = useState();

    // 🗒️ Nous avons maintenant accès une nouvelle Hook qui s'appele useForm et de laquelle, on va extraire plusieurs choses
    // - register ->
    // - handleSubmit -> une fonction qui fait le preventDefault et qui renvoie le state  qu'elle a fabriqué.
    // - formState -> 
    const { register, handleSubmit, formState : {errors},reset } = useForm({
                                                                         mode:'onchange', 
                                                                         defaultValues:{
                                                                          bill:0, 
                                                                          nbPerson:0,
                                                                          tips:5} });
    const splitBill = (data)=>{
      

      //data contient les données de notre formulaire auto-gérées par notre useForm grâce à register
      setTotalPerPerson((data.bill+(data.bill*data.tips/100))/data.nbPerson)
      reset()

    }

    return (
         <div>
            <h2>Split'O Resto</h2>
        
            <form onSubmit={handleSubmit(splitBill,()=> setTotalPerPerson(undefined) )}>
                <div>
                    <label htmlFor="bill">Total de la note :</label>
                    <input id="bill" name="bill" type="number" 
                    {...register('bill',{valueAsNumber:true,required:true, min:10} )} />

                    {
                    errors['bill']?.type === 'required' &&
                    <span> Ce champs est requis </span>
                    }
                    { 
                      errors['bill']?.type === 'min'&&
                      <span> Vous devz mettre une valeur minimum de 10€ </span>
                    }
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre de personnes :</label>
                    <input id="nbPerson" name="nbPerson" type="number" 
                    {...register('nbPerson',{valueAsNumber:true, required:true, min:1})} />
                     {
                    errors['nbPerson']?.type === 'required' &&
                    <span> Ce champs est requis </span>
                    }
                    { 
                      errors['nbPerson']?.type === 'min'&&
                      <span> Vous devz mettre une valeur minimum une personne </span>
                    }
                </div>
               

                <div>
                    <label htmlFor="tips">Pourboire :</label>
                    <select id="tips" name="tips" 
                    {...register('tips',{valueAsNumber:true, required:true })}>
                        <option value={0}>Aucun</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

              <button>Spliter 💸</button>
            </form>

            { totalPerPerson &&  
                <div>Vous devrez chacun·e payer : {totalPerPerson.toFixed(2)} €</div>
            }
        </div>
    )
}