import { data } from "../Datos/servicio_contratado.js";
import { servicios } from "../Datos/servicio.js";
let html = `<header class="banner">
<div class="banner_inner">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 text-center">
        <div class="container banner_content">
          <div class="row justify-content-center">
            <h2 class="font-weight-bold mb-5">
              UService
            </h2>
          </div>
          <div class="row justify-content-center">
            <p class="centrado fontNunito">
              Ofrecemos los mejores servicios para tu organización. Contacta a los mejores profesionales y contrata sus servicios.
            </p>
          </div>
          <div class="row justify-content-center">
            <a class="banner_btn" href="#">Comienza</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</header>

<main>
<section class="services fondo">
  <div class="container">
    <div class="titulo">
      <span class="sub-title">¿Qué ofrecemos?</span>
      <h2 class="font-weight-bold text-black mb-5 texto">Nuestros Servicios</h2>
      <p>
        Contrata los mejores servicios para tu compañía desde la comodidad
        de tu casa
      </p>
    </div>
    <div class="services_inner row">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="services_item">
          <img
            class="img-fluid"
            src="images/archInterior.jpg"
            alt="Service-1"
          />
          <h4 class="texto" >Arquitectura y diseño de interiores</h4>
          <p class="centrado">
            Solicita servicios de diseño de interiores y arquitectura para
            la remodelación de tus instalaciones. Desde el diseño hasta la
            construcción, ¡te ofrecemos todo!.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="services_item">
          <img
            class="img-fluid"
            src="images/carPlomeria.png"
            alt="Service-2"
          />
          <h4 class="centrado texto">
            Carpinteria, Plomeria y Servicios Varios
          </h4>
          <p class="centrado">
            Tenemos un amplio catálogo de profesionales expertos en
            carpintería, plomería, jardinería, tapicería y demás servicios
            varios para apoyar tus procesos de construcción y
            remodelación.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="services_item">
          <img
            class="img-fluid"
            src="images/limSeguridad.png"
            alt="Service-3"
          />
          <h4 class="centrado texto">Seguridad y Aseo</h4>
          <p class="centrado">
            Contrata personal altamente calificado para mantener la
            seguridad y el aseo de tus instalaciones.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="divSeccion">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="images/aboutus.jpg" alt="Image" class="img-fluid altura1" />
      </div>
      <div class="col-lg-5 ml-auto">
        <span class="sub-title">¿Por qué UService?</span>
        <h2 class="font-weight-bold text-black mb-5 texto">Sobre Nosotros</h2>
        <div class="card-body">
          <p class="texto">
            Te facilitamos el proceso de contacto y contratación de
            servicios varios para tu compañía en 4 sencillos pasos.
            ¡Conócelos!
          </p>
        </div>

        <div class="accordion" id="accordionExample">
          <h2 class="mb-0 border rounded mb-2 eliminar">
            <button
              class="btn collapsed extend"
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
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p class="textBody texto">
                Los profesionales de nuestro catálogo son profesionales de
                alta calidad que estarán dispuestos a ayudarte a
                desarrollar las actividades de tu compañía.
              </p>
            </div>
          </div>

          <h2 class="mb-0 border rounded mb-2 eliminar">
            <button
              class="btn collapsed extend"
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
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p class="textBody texto">
                Nosotros te ayudamos a buscar y filtrar los profesionales
                y servicios mejor adecuados para tus necesidades. Además,
                puedes contactarlos y contratarlos a través de nuestra
                página web sin ningún costo adicional.
              </p>
            </div>
          </div>

          <h2 class="mb-0 border rounded mb-2 eliminar">
            <button
              class="btn collapsed extend"
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
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p class=" texto">
                Te mostramos el estado de tu proyecto y puedes utilizar
                nuestra plataforma como canal de comunicación y registro
                de actividades de tus servicios.
              </p>
            </div>
          </div>

          <h2 class="mb-0 border rounded mb-2 eliminar">
            <button
              class="btn collapsed extend"
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
            class="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p class="textBody texto">
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

<section class="projects_area">
  <div class="titulo centrado2">
    <span class="sub-title centrado">¿Cómo trabajamos?</span>
    <h2 class="font-weight-bold text-black mb-5 centrado texto">
      Proyectos Realizados
    </h2>
  </div>
  <div class="row m0">
    <div class="projects_item wd_18">
      <img src="images/D1.jpg" alt="TIENDAD1" />
      <div class="container hover">
        <h4 class="font-weight-bold">
          Servicios de Limpieza de Tiendas D1
        </h4>
        <p class="menos fontNunito">
          Gracias a nuestros servicios, las tiendas D1 mantienen la
          limpieza de sus instalaciones al contratar profesionales de
          nuestro catálogo de proveedores.
        </p>
      </div>
    </div>
    <div class="projects_item wd_18">
      <img src="images/uniandes.jpg" alt="UNIANDES" />
      <div class="hover">
        <h4 class="font-weight-bold">
          Seguridad de Universidad de Los Andes
        </h4>
        <p>
          Proveemos el contacto y contratación de los servicios de
          seguridad para la Universidad de Los Andes.
        </p>
      </div>
    </div>
    <div class="projects_item wd_44">
      <img src="images/livin21.jpg" alt="LIVIN21" />
      <div class="hover">
        <h4 class="font-weight-bold">
          Diseño y construcción de LivinnX 21
        </h4>
        <p>
          Profesionales contratados por medio de nuestra plataforma fueron
          clave en el proceso de diseño y construcción de las viviendas
          universitarias LivinnX 21.
        </p>
      </div>
    </div>
    <div class="projects_item wd_18">
      <img src="images/tapiceria.jpg" alt="TAPICERIA" />
      <div class="hover">
        <h4 class="font-weight-bold">Servicios de Tapiceria</h4>
        <p>
          Hemos realizado mas de 500 servicios de tapicería para nuestros
          clientes
        </p>
      </div>
    </div>
  </div>
</section>

<section class="serviciosPopulares fondo">
  <div class="container">
    <div class="titulo centrado2">
      <span class="sub-title centrado"
        >¿Qué prefieren nuestros clientes?</span
      >
      <h2 class="font-weight-bold text-black mb-5 centrado texto">
        Servicios Populares
      </h2>
      <p class="texto">Los tres servicios más populares entre nuestros clientes son:</p>
    </div>

    <div id="filaServiciosPopulares" class="row">REEMPLAZAR</div>
  </div>
</section>

<section class="contact">
  <div class="container">
    <div class="titulo centrado2">
      <span class="sub-title centrado">¿Qué quieres decirnos?</span>
      <h2 class="font-weight-bold text-black mb-5 centrado texto">
        ¡Contáctanos!
      </h2>

      <form action="#" class="p-5 bg-white fondo">
        <div class="row form-group">
          <div class="col-md-12 mb-3 mb-md-0">
            <label class="font-weight-bold" for="fullname"
              >Tu nombre:</label
            >
            <input
              type="text"
              id="fullname"
              class="form-control"
              placeholder="Tu nombre"
            />
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-12">
            <label class="font-weight-bold" for="email">Email:</label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="Tu correo"
            />
          </div>
        </div>

        <div class="row form-group">
          <div class="col-md-12">
            <label class="font-weight-bold" for="message"
              >¿Que nos quieres decir?:</label
            >
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              class="form-control"
              placeholder="Tus sugerencias"
            ></textarea>
          </div>
        </div>

        <div class="row form-group">
          <div class="col-md-12">
            <input type="submit" value="Enviar" class="btn" />
          </div>
        </div>
      </form>
    </div>
  </div>
</section>
</main>
`;

const categorias = [
  "Carpinteria",
  "Plomeria",
  "Disenio_interiores",
  "Jardineria",
  "Tapiceria",
  "Remodelacion",
  "Construccion",
  "Demolicion",
  "Limpieza",
  "Seguridad",
];

let calcularServiciosMasPopulares = () => {
  let cantidades = [];
  categorias.forEach((el) => {
    let descripcion = "";
    let cantidad = 0;
    let ids = [];

    servicios.forEach((element) => {
      descripcion = element.descripcion;
      if (element.categoria == el.toLowerCase()) {
        ids.push(element._id);
      }
    });

    ids.forEach((id) => {
      cantidad = cantidad + data.filter((da) => da.fk_servicio == id).length;
    });

    cantidades.push({ tipo: el, desc: descripcion, num: cantidad });
  });

  cantidades = cantidades.sort((a, b) => b.num - a.num);
  let i = 0;
  let htmlServicios = "";
  while (i < 3) {
    let cadena =
      `<div class="col-12 col-md-6 col-lg-4">
    <div class="card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
        </div>
        <div class="col-md-8">
          <div class="card-body carta">
            <h5 class="card-title tituloCarta">` +
      cantidades[i].tipo +
      `</h5>
            <p class="card-text">` +
      cantidades[i].desc +
      `</p>
            <p class="card-text">
              <small class="text-muted">Contratado: ` +
      cantidades[i].num +
      ` veces</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    htmlServicios = htmlServicios + cadena;
    i = i + 1;
  }

  html = html.replace("REEMPLAZAR", htmlServicios);
};

export const render = (body) => {
  calcularServiciosMasPopulares();
  body.innerHTML = html;
};
