
import style from "./Exo5.module.css"
import { useState } from "react"


export const Exo5 = () => {


    const [calculForm, setCalculForm] = useState({
        nb1: '',
        nb2: '',
        operation: '+'
    })
    const [resultat, setResultat] = useState(null)
    const [erreur, setErreur] = useState('');

    const handleField = (event) => {

        const name = event.target.name
        const value = event.target.value

        setCalculForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setResultat(null)
        setErreur('')
        const num1 = parseFloat(calculForm.nb1); //transforme en nombre deciùal
        const num2 = parseFloat(calculForm.nb2);

        if (isNaN(num1) || isNaN(num2)) {
            setErreur('⚠️ Veuillez entrer des nombres valides SVPPPPPP');
            return;
        }

        let res
        switch (calculForm.operation) {
            case '+':
                res = num1 + num2
                break
            case '-':
                res = num1 - num2
                break
            case '*':
                res = num1 * num2
                break
            case '/':
                
                if(num2 ===0) {
                    setErreur('Division par 0 impossible bg 🫢')
                return
            }
                res = num1 / num2
                break 
                default:
                setErreur('Opération invalide bg 😏')
                return
        }

        setResultat(res)

    }

    return (

        <div className={style.container}>
            <h2>  Calculatrice </h2>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="nb1">Numéro 1 : </label>
                    <input id="nb1" name="nb1" type="text" value={calculForm.nb1} onChange={handleField} placeholder="0" />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="operation">Opération : </label>
                    <select id="operation" name="operation" value={calculForm.operation} onChange={handleField}>
                        <option value="+"> ➕ </option>
                        <option value="-"> ➖ </option>
                        <option value="*"> ✖️ </option>
                        <option value="/"> ➗ </option>

                    </select>
                </div>


                <div className={style.formGroup}>
                    <label htmlFor="nb2">Numéro 2 : </label>
                    <input id="nb2" name="nb2" type="text" value={calculForm.nb2} onChange={handleField} placeholder="0" />

                </div>
                <button className={style.buttons} type="submit"> Calculer 🤓  </button>
                {
                    erreur && <span>{erreur}</span>
                }

            </form>
            {resultat !== null && (<div>
                <div className={style.resultat}> Résultat : {resultat} </div>
            </div>)}

        </div>

    )
}