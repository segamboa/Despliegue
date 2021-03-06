import React, { useState, useEffect } from "react";
//import { useParams } from "react-router";
import { Button, Card, Accordion, Form, FormControl } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import "bootstrap/dist/css/bootstrap.min.css";
import {toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

toast.configure();

const axios = require("axios").default;

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [precioMax, setPrecioMax] = useState(1490);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/servicios")
      .then((response) => {
        setServicios(response.data);
        //console.log(response);
      })
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  const notify=()=>{
    toast('Contrato creado exitosamente, espera por la confirmación de tu proveedor!');
  }

  const filtro = (cat, precio_max) => {
    //console.log(servicios);
    // let catVal = categoriasValue[cat] ? categoriasValue[cat] : "";
    // let preVal = precio_min ? precio_min : 0;
    // let maxVal = precio_max ? precio_min : Number.MAX_SAFE_INTEGER;
    return servicios.filter((servicio) => {
      return (
        servicio.categoria ===
          (categoriasValue[cat] ? categoriasValue[cat] : "") &&
        servicio.precio_minimo <= (precio_max ? precio_max : 1000000)
      );
    });
  };

  const cartas = (cat, precio) =>
    filtro(cat, precio).map((element, index) => {
      return (
        <div className=" col-lg-3 col-md-4 col-sm-6 table-card-col" key={index}>
          <Card className="h-100" key={index} style={{ marginBottom: "10px" }}>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="table-card-title">
                {element.nombre}
              </Card.Title>
              <Card.Text className="table-card-text">
                {element.descripcion}
              </Card.Text>
              <div className="mt-auto">
                <p className="table-card-price">
                  Precio mínimo del servicio: ${element.precio_minimo}
                </p>
                <Button
                  className="table-card-button"
                  variant="primary"
                  style={{ marginBottom: "10px" }}
                  href={`proveedores/${element.proveedor._id}`}
                >
                  {element.proveedor.nombre}
                </Button>
                <br />
                <Button
                  className="table-card-button"
                  variant="primary"
                  onClick={() => {
                    contactar(index, cat);
                    notify();
                  }}
                >
                  Contratar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    });
  const contactar = async (indice, categoria) => {
    const servicioSeleccionado = filtro(categoria)[indice];
    //notify();
    const response = await axios({
      method: "post",
      url: process.env.REACT_APP_API_URL + "/servicioContratado",
      headers: {},
      data: {
        servicio: servicioSeleccionado,
        cliente: {
          _id: "5f964dcdfc13ae5ecc0003f6",
          nombre: "acaaaA",
          telefono: "127-460-7065",
          correo: "gevette@trellian.com",
        },
      },
    });
    console.log(response);
    // const response = await axios.post(process.env.REACT_APP_API_URL + '/servicioContratado');
  };
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
            <div className="row">{cartas(element, precioMax)}</div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  const handleSubmit = (event) => {
    console.log(precioMax);
  };

  return (
    <div>
      <div className="container-fluid">
        <Form>
          <Form.Label htmlFor="filter" style={{ marginTop: "10px" }}>
            {" "}
            Filtrar por precio máximo:
          </Form.Label>
          <div className="row">
            <div className="col-4">
            <RangeSlider
              min={0}
              max={1490}
              value={precioMax}
              onChange={(event) => setPrecioMax(event.target.value)}
            />
            </div>
            <div className="col-1">
            <Form.Control style={{ display: "left", marginBottom:"10px"}} onChange={(event) => setPrecioMax(event.target.value)} value={precioMax} />  
            </div>
          </div>
        </Form>
      </div>
      <Accordion>{elements}</Accordion>
    </div>
  );
};
export default Servicios;
