//Lectura Servicios Contratados
import request from './lecturaArchivos.js';

var dir_servicio_contratados = "./Datos/servicio_contratado.json";

let servicioContratado = [];

async function getData(url) {
      let cadenaServicioContratado = await request(url);
      console.log(cadenaServicioContratado);
      inicializarObjetos(cadenaServicioContratado);
  }

let inicializarObjetos = (cadena) => {
  let jFormato = JSON.parse(cadena);
  console.log("Tamaño: " + jFormato.length);
  jFormato.forEach((element) => {
    servicioContratado.push(
      new ServicioContratado(
        element.fk_servicio,
        element.fk_cliente,
        element.calificacion,
        element.fecha_contrato
      )
    );
  });
  console.log(servicioContratado);
};


class ServicioContratado {
  constructor(fk_servicio, fk_cliente, calificacion, fecha_contrato) {
    this.fk_servicio = fk_servicio;
    this.fk_cliente = fk_cliente;
    this.calificacion = calificacion;
    this.fecha_contrato = fecha_contrato;
  }
}
getData(dir_servicio_contratados);
