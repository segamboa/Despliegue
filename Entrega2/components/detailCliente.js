import { clientes } from "../Datos/clientes.js";
import { data as serviciosData } from "../Datos/servicio_contratado.js";
import { servicios as serviciosData } from "../Datos/servicio.js";

export const render = (id) => {
  let cliente = clientes.find((item) => item.id === id);
  let serviciosCliente = serviciosData.filter((item) => item.fk_cliente === id);

  let body = document.getElementById("body");

  body.innerHTML = "";
  body.appendChild(renderCliente(cliente));

  let title = document.createElement("h2");
  title.innerHTML = "Servicios contratados";
  body.appendChild(title);

  body.appendChild(renderServicios(serviciosCliente));
};

const renderCliente = (cliente) => {
  let clienteBody = document.createElement("table");
  clienteBody.classList.add("table");
  clienteBody.classList.add("table-striped");

  let header = document.createElement("tr");
  header.insertCell(0).innerHTML = "id";
  header.insertCell(1).innerHTML = "Nombre";
  header.insertCell(2).innerHTML = "Telefono";
  header.insertCell(3).innerHTML = "Correo";

  clienteBody.appendChild(header);

  let infoCliente = document.createElement("tr");
  infoCliente.insertCell(0).innerHTML = cliente.id;
  infoCliente.insertCell(1).innerHTML = cliente.nombre;
  infoCliente.insertCell(2).innerHTML = cliente.telefono;
  infoCliente.insertCell(3).innerHTML = cliente.correo;

  clienteBody.appendChild(infoCliente);

  return clienteBody;
};

const renderServicios = (servicios) => {
  let cardDeck = document.createElement("div");
  cardDeck.classList.add("card-deck");

  servicios.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src =
      "https://media.gettyimages.com/photos/sea-otter-picture-id169788211?s=612x612";
    img.alt = "product image";
    card.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = "titulo servicio";
    cardBody.appendChild(cardTitle);

    let cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    cardDescription.innerHTML = "descripcion bla bla bla bla vla";
    cardBody.appendChild(cardDescription);

    card.appendChild(cardBody);

    cardDeck.appendChild(card);
  });

  return cardDeck;
};
