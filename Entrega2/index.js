import { render as renderHome } from "./components/home.js";
import { render as renderProveedores } from "./components/listaProveedores.js";
import { render as renderContratosClientes } from "./components/servicioContratado.js";
import { render as renderCreateContract } from "./components/createContract.js";
import { render as renderServicios } from "./components/listaServicios.js";
import { render as renderContratosProveedor } from "./components/contratosProveedor.js";

const body = document.getElementById("body");

// initial paint
renderHome(body);

document.getElementById("home").addEventListener("click", () => {
  renderHome(body);
});

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

const renderNavbar = () => {
  appendNavbarElement("Servicios", () => {
    renderServicios(body);
  });
  appendNavbarElement("Proveedores", () => {
    renderProveedores(body);
  });
};

const renderClienteNavbar = () => {
  navbarList.innerHTML = "";
  renderNavbar();
};

const renderProveedoresNavbar = () => {
  navbarList.innerHTML = "";
  renderNavbar();

  appendNavbarElement("Contratos clientes", () => {
    renderContratosClientes(body);
  });
  appendNavbarElement("Crear contrato", () => renderCreateContract(body));
  let id = Math.floor(Math.random() * Math.floor(20));
  appendNavbarElement("Mis contratos", () => renderContratosProveedor(id));
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
