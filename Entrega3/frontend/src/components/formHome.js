import React from 'react';
import useFormHome from "../customHooks/useFormHome";
import validateFormHome from "../utils/validateFormHome";

const FormHome = ()=>{

    const {handleChanges, handleSubmit, errors} = useFormHome(validateFormHome);
    return(
    <div>
                    <form onSubmit={handleSubmit} className="p-5 bg-white fondo">
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold textoNegro" htmlFor="name">Tu nombre:</label>
                    <input type="text" className="form-control" name="name" placeholder="Tu nombre" onChange={handleChanges} id="name"/>
                    {errors.name&&<p>{errors.name}</p>}
                </div>
                </div>


                <div className="row form-group">
            <div className="col-md-12">
                    <label className="font-weight-bold textoNegro" htmlFor="email">Tu correo:</label>
                    <input type="email" className="form-control" name="email" placeholder="Tu correo" onChange={handleChanges} id="email"/>
                    {errors.email&&<p>{errors.email}</p>}
                </div>
                </div>

                <div className="row form-group">
            <div className="col-md-12">
                    <label className="font-weight-bold textoNegro" htmlFor="comment">¿Qué nos quieres decir?</label>
                    <textarea cols="30" rows="5" className="form-control" type="text" name="comment" placeholder="Tus sugerencias" onChange={handleChanges}  id="comment"></textarea>
                    {errors.comment&&<p>{errors.comment}</p>}
                </div>
                </div>
                
                <button className="btn">Enviar</button>

            </form>

    </div>
    )
}

export default FormHome;