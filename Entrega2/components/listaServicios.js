import { servicios as serviciosData } from "../Datos/servicio.js";

const renderServicios = (servicios) => {
  let cardDeck = document.createElement("div");
  cardDeck.classList.add("card-deck");

  servicios.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = item.nombre;
    cardBody.appendChild(cardTitle);

    let cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    cardDescription.innerHTML = item.descripcion;
    cardBody.appendChild(cardDescription);

    card.appendChild(cardBody);

    cardDeck.appendChild(card);
  });

  return cardDeck;
};

export const render = () => {
  let body = document.getElementById("body");
  body.innerHTML = "";

  let cardDeck = renderServicios(serviciosData);
  body.appendChild(cardDeck);
};
