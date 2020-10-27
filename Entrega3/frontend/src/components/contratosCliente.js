import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
//import { Button, Form, Dropdown, DropdownButton } from "react-bootstrap";

const axios = require("axios").default;

const ContratosCliente = () => {
  const { id } = useParams();

  const [contratos, setContratos] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [value, setValue] = useState({});

  const handleSelect = (evt) => {
    console.log(evt.target.value);
    setValue(evt.target.value);
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/servicioContratado/cliente/" + id)
      .then((response) => {
        setContratos(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const rows = contratos.map((element, index) => {
    return (
      <tr key={index + 1}>
        <th scope="row">{index + 1}</th>
        <td>{element.servicio.nombre}</td>
        <td>{element.cliente.nombre}</td>
        <td>{element.calificacion}</td>
        <td>{element.fecha_contrato}</td>
        <td>
          <button className="btn btn-dark">Ver proveedor</button>
        </td>
      </tr>
    );
  });

  useEffect(() => {
    const getServicios = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/servicios"
      );
      return response;
    };
    getServicios()
      .then((response) => {
        setServicios(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Tus contratos</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Servicio</th>
            <th>Cliente</th>
            <th>Calificación</th>
            <th>Fecha Contrato</th>
            <th>Detalle de proveedor</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
export default ContratosCliente;
