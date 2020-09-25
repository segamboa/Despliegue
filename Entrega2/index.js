import { render as renderHome } from "./components/home.js";
import { render as renderProveedores } from "./components/listaProveedores.js";
import { render as renderCards } from "./components/cards.js";
import { render as renderContratosClientes } from "./components/servicioContratado.js";
import { render as renderCreateContract } from "./components/createContract.js";
import { render as renderServicios } from "./components/listaServicios.js";

const body = document.getElementById("body");

// initial paint
renderHome(body);

document.getElementById("home").addEventListener("click", () => {
  renderHome(body);
});

document.getElementById("servicios").addEventListener("click", () => {
  renderServicios(body);
});

document.getElementById("proveedores").addEventListener("click", () => {
  renderProveedores(body);
});

document.getElementById("cards").addEventListener("click", () => {
  renderCards(body);
});
document.getElementById("contratosClientes").addEventListener("click", () => {
  renderContratosClientes(body);
});

document.getElementById("");
// navbar modification

const navbarList = document.getElementById("navbar-list");

const appendNavbarElement = (text, action) => {
  const item = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.appendChild(document.createTextNode(text));
  anchor.href = "#";
  anchor.classList.add("nav-link");

  item.appendChild(anchor);
  item.classList.add("nav-item");
  item.classList.add("active");

  item.addEventListener("click", action);

  navbarList.appendChild(item);
};

const renderClienteNavbar = () => {
  navbarList.innerHTML = "";
  appendNavbarElement("Clientes component 1", () => {
  });
};

const renderProveedoresNavbar = () => {
  navbarList.innerHTML = "";
  appendNavbarElement("Crear contrato", () => renderCreateContract(body));
};

let clienteNavbar = true;

document.getElementById("switch").addEventListener("click", () => {
  if (clienteNavbar) {
    renderProveedoresNavbar();
  } else {
    renderClienteNavbar();
  }
  clienteNavbar = !clienteNavbar;
});

// initial navbar paint
renderClienteNavbar();
