import React from 'react'
import './App.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

<<<<<<< HEAD
import Home from './components/home.js'
import Component1 from './components/component1.js'
import ProveedorDetail from './components/proveedorDetail.js'
import ContratosProveedor from './components/contratosProveedor.js'
import Servicios from './components/servicios.js'
import Signup from './components/signup.js'
import Login from './components/login.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
=======
import Home from "./components/home.js";
import Component1 from "./components/component1.js";
import ProveedorDetail from "./components/proveedorDetail.js";
import ContratosProveedor from "./components/contratosProveedor.js";
import Servicios from "./components/servicios.js";
import Footer from "./components/footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> 2f2433b20a449b23b5876e5b7f1434b90ea01625

import ContratosCliente from "./components/contratosCliente.js";

import { AuthProvider, useAuthState } from './Context/context.js'

import Navbar2 from './components/navbar.js'

function App () {
  
  return (
<<<<<<< HEAD
    <AuthProvider>
      <Router>
        <Navbar bg='dark' expand='md'>
          <Navbar.Brand href='/'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/component1'>Component 1</Nav.Link>
            <Navbar2/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path='/component1'>
            <Component1 />
          </Route>

          <Route path='/proveedores/contratos/:id'>
            <ContratosProveedor />
          </Route>

          <Route path='/servicios'>
            <Servicios />
          </Route>

          <Route path='/proveedores/:id'>
            <ProveedorDetail />
          </Route>
          <Route path='/clientes/contratos/:id'>
            <ContratosCliente />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
    <Route path='/login'>
            <Login />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
=======
    <Router>
      <Navbar bg="dark" expand="md">
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
>>>>>>> 2f2433b20a449b23b5876e5b7f1434b90ea01625
}

export default App
