import React, {useState} from 'react';

const useFormHome = (validateForm) =>{

    const [errors, setErrors] = useState([]);

    const [values, setValues] = useState({
        name:"",
        email:"",
        comment:"",
    });

    const handleChanges = (evt)=>{
        setValues({
            ...values, 
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        setErrors(validateForm(values));
        if(values.name.length === 0){
            console.log("Corrige tus errores");
        }
        else if(values.email.length === 0){
            console.log("Corrige tus errores");
        }
        else if(values.comment.length === 0){
            console.log("Corrige tus errores");
        }
        else{
            console.log(values.name + ",hemos guardados sus respuestas! Muchas gracias por contestar al formulario:  " + values.email + "  " + values.comment)
        }
    
    }

    return {handleChanges, handleSubmit, errors};
}

export default useFormHome;