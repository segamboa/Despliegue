const html = "<h1>Contratos clientes</h1>";
import { data } from "../Datos/servicio_contratado.js";
let servicioContratado = [];
var table = document.createElement("table");

let inicializarObjetos = (jCadena) => {
  jCadena.forEach((element) => {
    servicioContratado.push(
      new ServicioContratado(
        element.id,
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
  constructor(id, fk_servicio, fk_cliente, calificacion, fecha_contrato) {
    this.id = id;
    this.fk_servicio = fk_servicio;
    this.fk_cliente = fk_cliente;
    this.calificacion = calificacion;
    this.fecha_contrato = fecha_contrato;
  }
}
let crearTabla = () => {
  var tr = table.insertRow(-1);
  var thid = document.createElement("th");
  thid.innerHTML = "Id";
  tr.appendChild(thid);
  var thservicio = document.createElement("th");
  thservicio.innerHTML = "Servicio";
  tr.appendChild(thservicio);
  var thcliente = document.createElement("th");
  thcliente.innerHTML = "Cliente";
  tr.appendChild(thcliente);
  var thcalificacion = document.createElement("th");
  thcalificacion.innerHTML = "Calificación";
  tr.appendChild(thcalificacion);
  var thfecha = document.createElement("th");
  thfecha.innerHTML = "Servicio";
  tr.appendChild(thfecha);
  servicioContratado.forEach((element) => {
    tr = table.insertRow(-1);
    for (var propt in element) {
      let td = document.createElement("td");
      td.innerText = element[propt];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  });
};
inicializarObjetos(data);
crearTabla();
export const render = (body) => {
  body.innerHTML = html;

  body.appendChild(table);
};
