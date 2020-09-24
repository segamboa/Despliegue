import { render as renderHome } from "./components/home.js";
import { render as renderComponent1 } from "./components/component1.js";
import { render as renderCards } from "./components/cards.js";
import { render as renderContratosClientes } from "./components/servicioContratado.js";

const navbarList = document.getElementById("navbar-list");

document.getElementById("clientes-navbar").addEventListener("click", () => {
  navbarList.innerHTML = "";
  appendNavbarElement("Clientes component 1", () => {
    console.log("render component");
  });
});

document.getElementById("proveedores-navbar").addEventListener("click", () => {
  navbarList.innerHTML = "";
  appendNavbarElement("Proveedor component 1", () =>
    console.log("proveedor component 1")
  );
});

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

const body = document.getElementById("body");

// initial paint
renderHome(body);

document.getElementById("home").addEventListener("click", () => {
  renderHome(body);
});

document.getElementById("component-1").addEventListener("click", () => {
  renderComponent1(body);
});

document.getElementById("cards").addEventListener("click", () => {
  renderCards(body);
});
document.getElementById("contratosClientes").addEventListener("click", () => {
  renderContratosClientes(body);
});
