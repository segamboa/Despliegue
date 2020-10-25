import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
const axios = require("axios").default;

const ContratosCliente = () => {
  const { id } = useParams();

  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/clientes/contratos/" + id)
      .then((response) => {
        console.log(response.data);
        setContratos(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const rows=contratos.map((element, index) => {
    return (
      <tr key={index + 1}>
        <th scope="row">{index + 1}</th>
        <td>{element.servicio.nombre}</td>
        <td>{element.cliente.nombre}</td>
        <td>{element.calificacion}</td>
        <td>{element.fecha_contrato}</td>
        <button>Ver proveedor</button>
      </tr>
    );
  });
  return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Servicio</th>
            <th>Cliente</th>
            <th>Calificación</th>
            <th>Fecha Contrato</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
  );
};
export default ContratosCliente;
