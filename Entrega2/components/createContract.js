import { clientes } from "../Datos/clientes.js";
import { servicios } from "../Datos/servicio.js";

const form = document.createElement("form");
const divContainer = document.createElement("div");
const tituloCreate = document.createElement("h1");

const sendCreateContactForm = () => {
  const servicio = document.getElementById("inputServicio").value;
  const cliente = document.getElementById("inputCliente").value;
  const precio = document.getElementById("inputPrecio").value;
  const fecha = new Date().toLocaleString("es-CO").split(",")[0];
  let clienteBD = clientes.find((item) => item.nombre === cliente);
  let servicioBD = servicios.find((item) => item.nombre === servicio);
  let fk_cliente = 0;
  let fk_servicio = 0;
  if (clienteBD && servicioBD) {
    fk_cliente = clienteBD.id;
    fk_servicio = servicioBD.id;
    let contrato = {
      id: 10000,
      fk_servicio: fk_servicio,
      fk_cliente: fk_cliente,
      precioPactado: parseInt(precio),
      fecha: fecha,
      calificacion: 0,
    };
    console.log(contrato);
    alert("¡Felicitaciones por tu contrato nuevo!");
    document.getElementById("inputServicio").value = "";
    document.getElementById("inputCliente").value = "";
    document.getElementById("inputPrecio").value = "";
  } else {
    alert("Error de creación de contrato");
  }
};

const createContractForm = () => {
  divContainer.className = "container-sm";
  tituloCreate.innerText = "Llena los datos de tu contrato aquí";
  const formHTML = `<form>\
        <div class = "form-group">\
            <label for = "servicio">Servicio contratado</label>\
            <input type = "text" class = "form-control" id = "inputServicio" placeholder = "El nombre del servicio contratado">\
        </div>\
        <div class = "form-group">\
            <label for = "cliente">Cliente con quien contrata</label>\
            <input type = "text" class = "form-control" id = "inputCliente" placeholder = "Nombre del cliente">\
        </div>\
        <div class = "form-group">\
            <label for = "precio">Precio pactado</label>\
            <input type = "text" class = "form-control" id = "inputPrecio" placeholder = "Precio pactado con cliente">\
        </div>\
        <div>
            <button type = "submit" class = "btn btn-primary mb-2" id = "bttnSend">Enviar</button>
        </div>
    </form>
    `;

  form.innerHTML = formHTML;
  divContainer.appendChild(tituloCreate);
  divContainer.appendChild(form);
};

export const render = (body) => {
  body.innerHTML = "";
  body.appendChild(divContainer);
  createContractForm();
  const botonEnviar = document.getElementById("bttnSend");
  botonEnviar.addEventListener("click", () => sendCreateContactForm());
};
