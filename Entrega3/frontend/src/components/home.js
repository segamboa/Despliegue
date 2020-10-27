import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import FormHome from "./formHome";
import { Button, Card, Accordion } from "react-bootstrap";


const axios = require("axios").default;

const Home = () => {

  const [serviciosContratados, setServiciosContratados] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/servicioContratado")
      .then((response) => {
        setServiciosContratados(response.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const categorias = [
    "carpinteria",
    "plomeria",
    "disenio_interiores",
    "jardineria",
    "tapiceria",
    "remodelacion",
    "construccion",
    "demolicion",
    "limpieza",
    "seguridad",
  ];

  /*Calculo de los servicios más populares en la página*/

  let cantidades = [];

  categorias.forEach((el) => {
    let descripcion = "";
    let cantidad = 0;

    let filtrados = serviciosContratados.filter((da)=>da.servicio.categoria===el.toLowerCase());
    filtrados.forEach((el2)=>{descripcion = el2.servicio.descripcion;});
    cantidad = filtrados.length;
    

    cantidades.push({ tipo: el, desc: descripcion, num: cantidad });
  });
  cantidades = cantidades.sort((a, b) => b.num - a.num);
  let serviciosContratados2 = [];
  let i = 0;
  while (i < 3) {
    serviciosContratados2.push(cantidades[i]);
    i = i + 1;
  }
  i=0;


  return (<div><header className="banner"> 
  <div className="banner_inner">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 text-center">
          <div className="container banner_content">
            <div className="row justify-content-center">
              <h2 className="font-weight-bold mb-5">
                UService
              </h2>
            </div>
            <div className="row justify-content-center">
              <p className="centrado fontNunito">
                Ofrecemos los mejores servicios para tu organización. Contacta a los mejores profesionales y contrata sus servicios.
              </p>
            </div>
            <div className="row justify-content-center">
              <a className="banner_btn" href="./servicios">Comienza</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </header>
  
  <main>
  <section className="services fondo">
    <div className="container">
      <div className="titulo">
        <span className="sub-title">¿Qué ofrecemos?</span>
        <h2 className="font-weight-bold text-black mb-5 texto">Nuestros Servicios</h2>
        <p>
          Contrata los mejores servicios para tu compañía desde la comodidad
          de tu casa
        </p>
      </div>
      <div className="services_inner row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="services_item">
            <img
              className="img-fluid"
              src="images/archInterior.jpg"
              alt="Service-1"
            />
            <h4 className="texto" >Arquitectura y diseño de interiores</h4>
            <p className="centrado">
              Solicita servicios de diseño de interiores y arquitectura para
              la remodelación de tus instalaciones. Desde el diseño hasta la
              construcción, ¡te ofrecemos todo!.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="services_item">
            <img
              className="img-fluid"
              src="/images/carPlomeria.png"
              alt="Service-2"
            />
            <h4 className="centrado texto">
              Carpinteria, Plomeria y Servicios Varios
            </h4>
            <p className="centrado">
              Tenemos un amplio catálogo de profesionales expertos en
              carpintería, plomería, jardinería, tapicería y demás servicios
              varios para apoyar tus procesos de construcción y
              remodelación.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="services_item">
            <img
              className="img-fluid"
              src="images/limSeguridad.png"
              alt="Service-3"
            />
            <h4 className="centrado texto">Seguridad y Aseo</h4>
            <p className="centrado">
              Contrata personal altamente calificado para mantener la
              seguridad y el aseo de tus instalaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="divSeccion">
    <div className="container">
      <div className="row">

        <div className="col-lg-6 mb-5 mb-lg-0">
          <img src="images/aboutus.jpg" alt="SobreNosotros" className="img-fluid altura1" />
        </div>
        
        <div className="col-lg-5 ml-auto centrado">
        <span className="sub-title centrado">¿Por qué UService?</span>
        <h2 className="font-weight-bold text-black mb-5 textoNegro">Sobre Nosotros</h2>
        <div className="card-body">
          <p className="textoNegro">
            Te facilitamos el proceso de contacto y contratación de
            servicios varios para tu compañía en 4 sencillos pasos.
            ¡Conócelos!
          </p>
        </div>

        <Accordion className="centrado">
  <Card className="centrado">
    <Card.Header className="centrado">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      1. Tenemos los mejores profesionales del mercado
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> 
        Los profesionales de nuestro catálogo son profesionales de
        alta calidad que estarán dispuestos a ayudarte a
        desarrollar las actividades de tu compañía.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      2. Cumple las expectativas organizacionales
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body> 
        Nosotros te ayudamos a buscar y filtrar los profesionales
        y servicios mejor adecuados para tus necesidades. Además,
        puedes contactarlos y contratarlos a través de nuestra
        página web sin ningún costo adicional.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      3. Te mantenemos informado del estado de tu servicio
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
                  Te mostramos el estado de tu proyecto y puedes utilizar
                  nuestra plataforma como canal de comunicación y registro
                  de actividades de tus servicios.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
            4. ¡Disfruta del resultado final!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
                  Observa los resultados al terminar el proceso, realiza
                  modificaciones y continúa con nosotros para futuros
                  proyectos.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>  
        </div>

      </div>
    </div>
  </section>
  
  <section className="projects_area">
    <div className="titulo centrado2">
      <span className="sub-title centrado">¿Cómo trabajamos?</span>
      <h2 className="font-weight-bold text-black mb-5 centrado textoNegro">
        Proyectos Realizados
      </h2>
    </div>
    <div className="row m0">
      <div className="projects_item wd_18">
        <img src="images/D1.jpg" alt="TIENDAD1" />
        <div className="container hover">
          <h4 className="font-weight-bold">
            Servicios de Limpieza de Tiendas D1
          </h4>
          <p className="menos fontNunito">
            Gracias a nuestros servicios, las tiendas D1 mantienen la
            limpieza de sus instalaciones al contratar profesionales de
            nuestro catálogo de proveedores.
          </p>
        </div>
      </div>
      <div className="projects_item wd_18">
        <img src="images/uniandes.jpg" alt="UNIANDES" />
        <div className="hover">
          <h4 className="font-weight-bold">
            Seguridad de Universidad de Los Andes
          </h4>
          <p>
            Proveemos el contacto y contratación de los servicios de
            seguridad para la Universidad de Los Andes.
          </p>
        </div>
      </div>
      <div className="projects_item wd_44">
        <img src="images/livin21.jpg" alt="LIVIN21" />
        <div className="hover">
          <h4 className="font-weight-bold">
            Diseño y construcción de LivinnX 21
          </h4>
          <p>
            Profesionales contratados por medio de nuestra plataforma fueron
            clave en el proceso de diseño y construcción de las viviendas
            universitarias LivinnX 21.
          </p>
        </div>
      </div>
      <div className="projects_item wd_18">
        <img src="../images/tapiceria.jpg" alt="TAPICERIA" />
        <div className="hover">
          <h4 className="font-weight-bold">Servicios de Tapiceria</h4>
          <p>
            Hemos realizado mas de 500 servicios de tapicería para nuestros
            clientes
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="serviciosPopulares fondo">
    <div className="container">
      <div className="titulo centrado2">
        <div>
        <span className="sub-title centrado"
          >¿Qué prefieren nuestros clientes?</span
        >
        </div>
        <div>
        <h2 className="font-weight-bold text-black mb-5 centrado texto">
          Servicios Populares
        </h2>
        </div>
        <div>
        <p key="1" className="texto">Los tres servicios más populares entre nuestros clientes son:</p>
        </div>
      </div>

      
  
      <div id="filaServiciosPopulares" className="row">
  {serviciosContratados2.map((s, index)=> <div key={index} className="col-12 col-md-6 col-lg-4">
    <div className="card mb-3 cosa">
      <div className="row no-gutters">
        <div className="col-md-4">
        </div>
        <div className="col-md-8">
          <div className="card-body carta">
            <h5 className="card-title tituloCarta">{s.tipo}</h5>
            <p className="card-text">{s.desc}</p>
            <p className="card-text">
              <small className="text-muted">Contratado: {s.num} veces</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>)}

  </div>
    </div>
  </section>
  
  <section className="contact">
    <div className="container">
      <div className="titulo centrado2">
        <span className="sub-title centrado">¿Qué quieres decirnos?</span>
        <h2 className="font-weight-bold text-black mb-5 centrado textoNegro">
          ¡Contáctanos!
        </h2>
        <FormHome key="1"/>
        
      </div>
    </div>
  </section>
  </main></div>);
};

export default Home;
