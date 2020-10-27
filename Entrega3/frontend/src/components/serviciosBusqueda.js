import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const axios = require("axios").default;

const BuscarServicio = () => {
  const [servicios, setServicios] = useState([]);
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/servicios")
      .then((response) => {
        setServicios(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const restaurarServicios = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/servicios")
      .then((response) => {
        setServicios(response.data);
      })
      .catch((err) => console.log(err));
  };

  const filtroCategoria = (cat) => {
    // Quita las tildes y reduce a minúsculas
    // let newCat = cat.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const result = servicios.filter((servicio) => servicio.categoria === cat);
    setServicios(result);
    return result;
  };

  const filtroDescripcion = (descr) => {
    const result = servicios.filter((servicio) =>
      servicio.descripcion.includes(`${descr}`)
    );
    setServicios(resut);
    return result;
  };

  const filtroPrecio = (precio) => {
    const result = servicios.filter(
      (servicio) => servicio.precio_minimo < precio
    );
    setServicios(resut);
    return result;
  };

  const filtroNombre = (nombre) => {
    const result = servicios.filter((servicio) =>
      servicio.nombre.includes(`${nombre}`)
    );
    setServicios(result);
    return result;
  };

  const categorias = {
    Carpintería: "carpinteria",
    Plomería: "plomeria",
    "Diseño interiores": "disenio_interiores",
    Jardinería: "jardineria",
    Tapicería: "tapiceria",
    Remodelación: "remodelacion",
    Construcción: "construccion",
    Demolición: "demolicion",
    Limpieza: "limpieza",
    Seguridad: "seguridad",
  };

  const filtro = (cat, precio_min, precio_max) => {
    return servicios.filter((servicio) => {
      servicio.categoria === (categorias[cat] ? categorias[cat] : "") &&
        servicio.precio_minimo >= (precio_min ? precio_min : 0) &&
        servicio.precio_maximo <=
          (precio_max ? precio_min : Number.MAX_SAFE_INTEGER);
    });
  };

  const crearCartas = () =>
    servicios.map((element, index) => {
      return (
        <div className=" col-lg-3 col-md-4 col-sm-6" key={index}>
          <Card key={index} style={{ marginBottom: "10px" }}>
            <Card.Body>
              <Card.Title>{element.nombre}</Card.Title>
              <Card.Text>
                {element.descripcion} <br></br>
                <strong>{element.precio_minimo}</strong>
              </Card.Text>
              <Button variant="primary">{element.proveedor.nombre}</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
};

export default Servicios;
