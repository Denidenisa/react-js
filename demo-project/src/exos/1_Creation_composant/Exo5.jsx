import { useState } from "react"


export const Exo5 = ()=>{


    const [calculFrom, setCalculForm]=useState({
        nb1:'',
        nb2:'',
        operation:'+'
    })
    const [resultat, setResultat]=useState(null)
    const [erreur, setErreur] = useState('');

    const handleField=(event)=>{

        const name=event.target.name
        const value=event.target.value

        setCalculForm(prev=>({
            ...prev,
            [name]:value 
        }))
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        setResultat(null)
        setErreur('')

    }
    const num1 = parseFloat(calcForm.nb1); //transforme en nombre deciùal
    const num2 = parseFloat(calcForm.nb2);

    if (isNaN(num1) || isNaN(num2)) {
            setErreur('⚠️ Veuillez entrer des nombres valides SVPPPPPP');
            return;
        }

        //* Effectuer le calcul 
}