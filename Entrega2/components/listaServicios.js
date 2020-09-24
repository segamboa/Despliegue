import { servicios as serviciosData } from "../Datos/servicio.js";
import { data as proveedoresData } from "../Datos/listaProveedores.js";

const renderServicios = (servicios) => {
  let cardDeck = document.createElement("div");
  cardDeck.classList.add("card-deck");

  servicios.forEach((item) => {
    let proveedor = proveedoresData.find((ite) => ite.id == item.fk_proveedor);

    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = item.nombre;
    cardBody.appendChild(cardTitle);

    let cardSubTitle = document.createElement("h6");
    cardSubTitle.classList.add("card-subtitle");
    cardSubTitle.innerHTML = proveedor.ciudad;
    cardBody.appendChild(cardSubTitle);

    let cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    cardDescription.innerHTML = item.descripcion;
    cardBody.appendChild(cardDescription);

    let price = document.createElement("p");
    price.classList.add("card-text");
    price.innerHTML = item.precio_minimo;
    cardBody.appendChild(price);

    let linkProveedor = document.createElement("a");
    linkProveedor.href = "";
    linkProveedor.classList.add("card-link");
    linkProveedor.innerHTML = "Contacto proveedor";
    linkProveedor.addEventListener("click", () => {
      console.log("llevame al detalle del proveedor");
    });
    cardBody.appendChild(linkProveedor);

    card.appendChild(cardBody);

    cardDeck.appendChild(card);
  });

  return cardDeck;
};

export const render = (body) => {
  body.innerHTML = "";

  let cardDeck = renderServicios(serviciosData);
  body.appendChild(cardDeck);
};
