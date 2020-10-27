import React from "react";
import "./App.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Home from "./components/home.js";
import Component1 from "./components/component1.js";
import ProveedorDetail from "./components/proveedorDetail.js";
import ContratosProveedor from "./components/contratosProveedor.js";
import Servicios from "./components/servicios.js";
import Footer from "./components/footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContratosCliente from "./components/contratosCliente.js";

function App() {
  return (
    <Router>
      <Navbar bg="dark" expand="md" className="sticky">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/component1">Component 1</Nav.Link>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href="/servicioContratado/cliente/:id">
              Contratos cliente
            </Nav.Link>
            <Nav.Link href="/servicioContratado/proveedor/:id">
              Contratos empresa
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/component1">
          <Component1 />
        </Route>

        <Route path="/servicioContratado/proveedor/:id">
          <ContratosProveedor />
        </Route>

        <Route path="/servicios">
          <Servicios />
        </Route>

        <Route path="/proveedores/:id">
          <ProveedorDetail />
        </Route>
        <Route path="/servicioContratado/cliente/:id">
          <ContratosCliente />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
