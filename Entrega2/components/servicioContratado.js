const html = "<h1 class ='texto'>Sus contratos con clientes son estos</h1>";
import { data } from "../Datos/servicio_contratado.js";
let servicioContratado = [];
var table = document.createElement("table");
import { render as renderCliente } from "./detailCliente.js";

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
const crearTabla = () => {
  table.classList.add("table");
  table.classList.add("table-striped");
  table.classList.add("justify-content-center");
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
  thfecha.innerHTML = "Fecha contrato";
  tr.appendChild(thfecha);
  var thbutton = document.createElement("th");
  thbutton.innerHTML = "";
  tr.appendChild(thbutton);
  servicioContratado.forEach((element) => {
    tr = table.insertRow(-1);
    for (var propt in element) {
      let td = document.createElement("td");
      td.innerText = element[propt];
      tr.appendChild(td);
    }
    let buttonDetailCliente = document.createElement("button");
    buttonDetailCliente.addEventListener("click", () => {
      renderCliente(element.fk_cliente);
    });
    buttonDetailCliente.innerHTML = "Ver cliente";
    buttonDetailCliente.classList.add("btn");
    buttonDetailCliente.classList.add("btn-secondary");
    tr.appendChild(buttonDetailCliente);
    table.appendChild(tr);
  });
};
inicializarObjetos(data);
crearTabla();
export const render = (body) => {
  body.innerHTML = html;

  body.appendChild(table);
};
