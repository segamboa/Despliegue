const html = "<h1>Proveedores</h1>";

import { data } from "../Datos/listaProveedores.js";
let servicioContratado = [];
var table = document.createElement("table");


let inicializarObjetos = (jCadena) => {
  jCadena.forEach((element) => {
    servicioContratado.push(
      new Proveedor(
        element.id,
        element.nombre,
        element.direccion,
        element.telefono,
        element.correo,
        element.nit,
        element.ciudad
      )
    );
  });
};

class Proveedor {
  constructor(id, nombre, direccion, telefono, correo, nit, ciudad) { 
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.correo = correo;
    this.nit = nit;
    this.ciudad = ciudad;
  }
}
let crearTabla = () => {
  table.classList.add("table");
  var tr = table.insertRow(-1);
  var thid = document.createElement("th");
  thid.innerHTML = "Id";
  tr.appendChild(thid);
  var thservicio = document.createElement("th");
  thservicio.innerHTML = "Nombre";
  tr.appendChild(thservicio);
  var thcliente = document.createElement("th");
  thcliente.innerHTML = "Dirección";
  tr.appendChild(thcliente);
  var thcalificacion = document.createElement("th");
  thcalificacion.innerHTML = "Telefono";
  tr.appendChild(thcalificacion);
  var thfecha = document.createElement("th");
  thfecha.innerHTML = "Correo";
  tr.appendChild(thfecha);
  var thnit = document.createElement("th");
  thnit.innerHTML = "NIT";
  tr.appendChild(thnit);
  var thciudad = document.createElement("th");
  thciudad.innerHTML = "Ciudad";
  tr.appendChild(thciudad);
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
