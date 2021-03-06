import React from 'react'
import './App.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Home from "./components/home.js";
import ProveedorDetail from "./components/proveedorDetail.js";
import ContratosProveedor from "./components/contratosProveedor.js";
import Servicios from "./components/servicios.js";
import Footer from "./components/footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContratosCliente from "./components/contratosCliente.js";

import { AuthProvider, useAuthState } from './Context/context.js'
import Signup from './components/signup.js'
import Login from './components/login.js'


import Navbar2 from './components/navbar.js'

function App () {
  
  return (
    <AuthProvider>
      <Router>
        <Navbar bg='dark' expand='md'>
          <Navbar.Brand href='/'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/servicios'>Servicios</Nav.Link>
            <Navbar2/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
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
          <Route path='/proveedores/contratos/:id'>
            <ContratosProveedor />
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
      <Footer></Footer>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
