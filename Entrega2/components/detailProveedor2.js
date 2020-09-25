import { data as proveedoresData } from "../Datos/listaProveedores.js";

export const render = (id) => {
  let proveedor = proveedoresData.find((item) => item.id === id);
  const body = document.getElementById("body");
  body.classList.add("container-sm");

  body.innerHTML = `<div>
  <h5>${proveedor.nombre}</h5>
    <p>
        Direccion: ${proveedor.direccion} <br/>
        Ciudad: ${proveedor.ciudad} <br/>
        Email: ${proveedor.correo} <br/>
    </p>
  </div>`;
};
