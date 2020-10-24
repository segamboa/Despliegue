import { data as servicios_contratados } from "../Datos/servicio_contratado.js";
import { servicios } from "../Datos/servicio.js";

export const render = (id) => {
  let serviciosProveedor = [];
  let serviciosProveedorContratados = [];

  serviciosProveedor = servicios.filter(
    (element) => element.fk_proveedor === id
  );
  serviciosProveedor.forEach((servicio) => {
    servicios_contratados.forEach((servicio_contratado) => {
      if (servicio_contratado.fk_servicio === servicio.id)
        serviciosProveedorContratados.push(servicio_contratado);
    });
  });
  // TODO
  let body = document.getElementById("body");
  body.innerHTML = "";
  body.appendChild(
    renderServiciosProveedor(serviciosProveedor, serviciosProveedorContratados)
  );
};

const renderServiciosProveedor = (
  servicesProveedor,
  servicesProveedorHired
) => {
  let table = document.createElement("table");
  table.classList.add("table");
  table.classList.add("table-striped");
  // Top row:
  let thead = document.createElement("thead");
  thead.classList.add("table-header");
  let tr = document.createElement("tr");
  tr.insertCell(0).innerHTML = `<p class="table-header-row">Contrato</p>`;
  tr.insertCell(1).innerHTML = `<p class="table-header-row">Nombre cliente</p>`;
  tr.insertCell(2).innerHTML = `<p class="table-header-row">Fecha contrato</p>`;
  tr.insertCell(3).innerHTML = `<p class="table-header-row">Precio pactado</p>`;
  thead.appendChild(tr);
  let tbody = document.createElement("tbody");
  servicesProveedorHired.forEach((sc, index) => {
    let r = document.createElement("tr");
    r.insertCell(0).innerHTML = index + 1;
    let s = servicesProveedor.find((element) => element.id === sc.fk_servicio);

    r.insertCell(1).innerHTML = s ? s.nombre : "Cliente 1";
    r.insertCell(2).innerHTML = sc.fecha_contrato;
    r.insertCell(3).innerHTML = sc.precio_pactado;
    tbody.appendChild(r);
  });
  // Final appends:
  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
};
