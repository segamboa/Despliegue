import React, { useState, useEffect } from "react";
//import { useParams } from "react-router";
import { Button, Card, Accordion, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

const axios = require("axios").default;

const Servicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/servicios")
      .then((response) => {
        console.log(response);
        setServicios(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  /* const categorias = [
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

  const filtro = (cat) => {
    if (cat === "Carpintería") {
      return servicios.filter(
        (categoria) => categoria.categoria === "carpinteria"
      );
    } else if (cat === "Plomería") {
      return servicios.filter(
        (categoria) => categoria.categoria === "plomeria"
      );
    } else if (cat === "Diseño interiores") {
      return servicios.filter(
        (categoria) => categoria.categoria === "disenio_interiores"
      );
    } else if (cat === "Jardinería") {
      return servicios.filter(
        (categoria) => categoria.categoria === "jardineria"
      );
    } else if (cat === "Tapicería") {
      return servicios.filter(
        (categoria) => categoria.categoria === "tapiceria"
      );
    } else if (cat === "Remodelación") {
      return servicios.filter(
        (categoria) => categoria.categoria === "remodelacion"
      );
    } else if (cat === "Construcción") {
      return servicios.filter(
        (categoria) => categoria.categoria === "construccion"
      );
    } else if (cat === "Demolición") {
      return servicios.filter(
        (categoria) => categoria.categoria === "demolicion"
      );
    } else if (cat === "Limpieza") {
      return servicios.filter(
        (categoria) => categoria.categoria === "limpieza"
      );
    } else if (cat === "Seguridad") {
      return servicios.filter(
        (categoria) => categoria.categoria === "seguridad"
      );
    }
  }; */

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

  const categoriasValue = {
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
      return (
        servicio.categoria ===
          (categoriasValue[cat] ? categoriasValue[cat] : "") &&
        servicio.precio_minimo >= (precio_min ? precio_min : 0) &&
        servicio.precio_maximo <=
          (precio_max ? precio_min : Number.MAX_SAFE_INTEGER)
      );
    });
  };

  const cartas = (cat) =>
    filtro(cat).map((element, index) => {
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

  // function CustomToggle({ children, eventKey }) {
  //   const decoratedOnClick = useAccordionToggle(eventKey, () => (
  //    setCard(filtro(children)),
  //    console.log(cartas(card))
  //   ));

  //   return <Button onClick={decoratedOnClick}>{children}</Button>;
  // }

  const elements = categorias.map((element, index) => {
    return (
      <Card key={index}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={index + 1}>
            {element}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={index + 1}>
          <Card.Body>
            <div className="row">{cartas(element)}</div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  const handleSubmit = () => {};

  return (
    <div>
      <div>
        <Form>
          <Form.Label htmlFor="filter"></Form.Label>
          <FormControl
            name="Filter"
            placeholder="Precio Mínimo"
            type="number"
            id="filter"
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
      <Accordion>{elements}</Accordion>
    </div>
  );
};
export default Servicios;
