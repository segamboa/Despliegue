export default function validateFormHome(values){
    const err = {};

    if(values.name.length === 0){
        err.name = "Por favor ingresar su nombre"
    }
    if(values.email.length === 0){
        err.email = "Por favor ingresar su correo"
    }
    if(values.comment.length === 0){
        err.comment = "Por favor ingrese un comentario"
    }
    return err;
}