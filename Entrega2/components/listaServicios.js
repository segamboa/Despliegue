import { servicios as serviciosData } from "../Datos/servicio.js";
import { data as proveedoresData } from "../Datos/listaProveedores.js";

import { render as renderProveedor } from "./detailProveedor.js";

const categorias = [
  "Carpintería",
  "Plomería",
  "Diseño interiores",
  "Jardinería",
  "Tapicería",
  "Remodelación",
  "Construcción",
  "Demolición",
  "Limpieza",
  "Seguridad",
];

const renderServicios = (servicios) => {
  let cardDeck = document.createElement("div");
  cardDeck.classList.add("card-deck");
  cardDeck.classList.add("justify-content-center");

  servicios.forEach((item) => {
    let proveedor = proveedoresData.find((ite) => ite.id == item.fk_proveedor);

    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.classList.add("carta");
    cardBody.classList.add("d-flex");
    cardBody.classList.add("flex-column");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.classList.add("tituloCarta");
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

    let bottomCard = document.createElement("div");
    bottomCard.classList.add("mt-auto");

    let price = document.createElement("p");
    price.classList.add("card-text");
    price.innerHTML = `<strong>${item.precio_minimo}</strong>`;
    bottomCard.appendChild(price);

    let linkProveedor = document.createElement("a");
    linkProveedor.id = proveedor.id;
    linkProveedor.href = "#";
    linkProveedor.classList.add("card-link");
    linkProveedor.innerHTML = "Contacto proveedor";
    linkProveedor.id = proveedor.id;

    linkProveedor.addEventListener("click", () => {
      renderProveedor(proveedor.id);
    });

    bottomCard.appendChild(linkProveedor);
    cardBody.appendChild(bottomCard);

    card.appendChild(cardBody);

    cardDeck.appendChild(card);
  });

  return cardDeck;
};

const cate = (cat) => {
  let parametro = "";
  let html = "";
  if (cat === "Carpintería") {
    parametro = serviciosData.filter(
      (categoria) => categoria.categoria === "carpinteria"
    );
    html = renderServicios(parametro);
  } else if (cat === "Plomería") {
    parametro = serviciosData.filter(
      (categoria) => categoria.categoria === "plomeria"
    );
    html = renderServicios(parametro);
  } else if (cat === "Diseño interiores") {
    parametro = serviciosData.filter(
      (categoria) => categoria.categoria === "disenio_interiores"
    );
    html = renderServicios(parametro);
  } else if (cat === "Jardinería") {
    parametro = serviciosData.filter(
      (categoria) => categoria.categoria === "jardineria"
    );
    html = renderServicios(parametro);
  } else if (cat === "Tapicería") {
    parametro = serviciosData.filter(
      (categoria) => categoria.categoria === "tapiceria"
    );
    html = renderServicios(parametro);
  } else if (cat === "Remodelación") {
    parametro = serviciosData.filter(
      (categoria) => categoria.categoria === "remodelacion"
    );
    html = renderServicios(parametro);
  } else if (cat === "Construcción") {
    parametro = serviciosData.filter(
      (categoria) => categoria.categoria === "construccion"
    );
    html = renderServicios(parametro);
  } else if (cat === "Demolición") {
    parametro = serviciosData.filter(
      (categoria) => categoria.categoria === "demolicion"
    );
    html = renderServicios(parametro);
  } else if (cat === "Limpieza") {
    parametro = serviciosData.filter(
      (categoria) => categoria.categoria === "limpieza"
    );
    html = renderServicios(parametro);
  } else if (cat === "Seguridad") {
    parametro = serviciosData.filter(
      (categoria) => categoria.categoria === "seguridad"
    );
    html = renderServicios(parametro);
  }
  return html;
};

const renderAcordeon = () => {
  let body = document.getElementById("body");
  let contador = 0;
  body.innerHTML = `<div class="accordion" id="accordionExample">`;
  serviciosData.filter((categoria) => categoria === "carpinteria");

  for (let cat of categorias) {
    let buttons = document.createElement("div");
    buttons.innerHTML = `<div>
    <div class="card-header" id="heading${contador}">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed extend servicioBoton" type="button" data-toggle="collapse" data-target="#collapse${contador}" aria-expanded="true" aria-controls="collapse${contador}">
          ${cat}
        </button>
      </h2>
    </div>`;

    body.appendChild(buttons);

    let collapsible = document.createElement("div");
    collapsible.id = `collapse${contador}`;
    collapsible.classList.add("collapse");
    collapsible["aria-labelledby"] = `heading${contador}`;
    collapsible["data-parent"] = "#accordionExample";

    collapsible.appendChild(cate(cat));

    body.appendChild(collapsible);

    contador++;
  }
};

export const render = (body) => {
  body.innerHTML = "";
  renderAcordeon();
};
