import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

const axios = require("axios").default;

const Home = () => {

  const [servicios, setServicios] = useState([]);
  
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/servicios")
      .then((response) => {
        setServicios(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

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

  /*Calculo de los servicios más populares en la página*/

  let cantidades = [];
  

  cantidades = cantidades.sort((a, b) => b.num - a.num);


  return (<><header className="banner"> 
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
              <a className="banner_btn" href="#">Comienza</a>
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
          <img src="images/aboutus.jpg" alt="Image" className="img-fluid altura1" />
        </div>
        <div className="col-lg-5 ml-auto">
          <span className="sub-title">¿Por qué UService?</span>
          <h2 className="font-weight-bold text-black mb-5 texto">Sobre Nosotros</h2>
          <div className="card-body">
            <p className="texto">
              Te facilitamos el proceso de contacto y contratación de
              servicios varios para tu compañía en 4 sencillos pasos.
              ¡Conócelos!
            </p>
          </div>
  
          <div className="accordion" id="accordionExample">
            <h2 className="mb-0 border rounded mb-2 eliminar">
              <button
                className="btn collapsed extend"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1. Tenemos los mejores profesionales del mercado
              </button>
            </h2>
  
            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p className="textBody texto">
                  Los profesionales de nuestro catálogo son profesionales de
                  alta calidad que estarán dispuestos a ayudarte a
                  desarrollar las actividades de tu compañía.
                </p>
              </div>
            </div>
  
            <h2 className="mb-0 border rounded mb-2 eliminar">
              <button
                className="btn collapsed extend"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. Cumple las expectativas organizacionales
              </button>
            </h2>
  
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p className="textBody texto">
                  Nosotros te ayudamos a buscar y filtrar los profesionales
                  y servicios mejor adecuados para tus necesidades. Además,
                  puedes contactarlos y contratarlos a través de nuestra
                  página web sin ningún costo adicional.
                </p>
              </div>
            </div>
  
            <h2 className="mb-0 border rounded mb-2 eliminar">
              <button
                className="btn collapsed extend"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. Te mantenemos informado del estado de tu servicio
              </button>
            </h2>
  
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p className=" texto">
                  Te mostramos el estado de tu proyecto y puedes utilizar
                  nuestra plataforma como canal de comunicación y registro
                  de actividades de tus servicios.
                </p>
              </div>
            </div>
  
            <h2 className="mb-0 border rounded mb-2 eliminar">
              <button
                className="btn collapsed extend"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                4. ¡Disfruta del resultado final!
              </button>
            </h2>
  
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p className="textBody texto">
                  Observa los resultados al terminar el proceso, realiza
                  modificaciones y continúa con nosotros para futuros
                  proyectos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="projects_area">
    <div className="titulo centrado2">
      <span className="sub-title centrado">¿Cómo trabajamos?</span>
      <h2 className="font-weight-bold text-black mb-5 centrado texto">
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
        <span className="sub-title centrado"
          >¿Qué prefieren nuestros clientes?</span
        >
        <h2 className="font-weight-bold text-black mb-5 centrado texto">
          Servicios Populares
        </h2>
        <p className="texto">Los tres servicios más populares entre nuestros clientes son:</p>
      </div>
  
      <div id="filaServiciosPopulares" className="row">REEMPLAZAR</div>
    </div>
  </section>
  
  <section className="contact">
    <div className="container">
      <div className="titulo centrado2">
        <span className="sub-title centrado">¿Qué quieres decirnos?</span>
        <h2 className="font-weight-bold text-black mb-5 centrado texto">
          ¡Contáctanos!
        </h2>
  
        <form action="#" className="p-5 bg-white fondo">
          <div className="row form-group">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" htmlFor="fullname"
                >Tu nombre:</label
              >
              <input
                type="text"
                id="fullname"
                className="form-control"
                placeholder="Tu nombre"
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label className="font-weight-bold" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Tu correo"
              />
            </div>
          </div>
  
          <div className="row form-group">
            <div className="col-md-12">
              <label className="font-weight-bold" htmlFor="message"
                >¿Que nos quieres decir?:</label
              >
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="form-control"
                placeholder="Tus sugerencias"
              ></textarea>
            </div>
          </div>
  
          <div className="row form-group">
            <div className="col-md-12">
              <input type="submit" value="Enviar" className="btn" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  </main></>);
};

export default Home;
