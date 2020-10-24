import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
const axios = require("axios").default;

function RenderContratosProveedor({ contrato, nCliente }) {
  return (
    <>
      <th scope="row">{nCliente}</th>
      <td>{contrato.cliente.nombre}</td>
      <td>{contrato.fecha_contrato}</td>
      <td>{contrato.precio_pactado}</td>
    </>
  );
}

function ContratosProveedor() {
  const { id } = useParams();
  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/empresas/contratos/" + id)
      .then((response) => {
        console.log(response.data);
        setContratos(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const rows = contratos.map((contrato, i) => {
    return (
      <tr>
        <RenderContratosProveedor contrato={contrato} nCliente={i++} />
      </tr>
    );
  });
  return (
    <table className="table table-striped">
      <thead className="table-header">
        <tr>
          <th scope="col">Contrato</th>
          <th className="table-header-row">Nombre de cliente</th>
          <th className="table-header-row">Fecha de contrato</th>
          <th className="table-header-row">Precio pactado</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ContratosProveedor;
