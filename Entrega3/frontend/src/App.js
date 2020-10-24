import React from "react";
import "./App.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Home from "./components/home.js";
import Component1 from "./components/component1.js";
import ProveedorDetail from "./components/proveedorDetail.js";
import ContratosProveedor from "./components/contratosProveedor.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContratosCliente from './components/contratosCliente.js'

function App() {
  return (
    <Router>
      <Navbar bg="dark" expand="md">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/component1">Component 1</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/component1">
          <Component1 />
        </Route>

        <Route path="/proveedores/contratos/:id">
          <ContratosProveedor />
        </Route>

        <Route path="/proveedores/:id">
          <ProveedorDetail />
        </Route>
        <Route path='/clientes/contratos/:id'>
          <ContratosCliente/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
