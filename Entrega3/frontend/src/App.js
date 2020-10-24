import React from 'react'
import './App.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Home from './components/home.js'
import Component1 from './components/component1.js'
import EmpresaDetail from './components/empresaDetail.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {
  return (
    <Router>
      <Navbar bg='dark' expand='md'>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/component1'>Component 1</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path='/component1'>
          <Component1 />
        </Route>
        <Route path='/empresas/:id'>
          <EmpresaDetail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </Router>
  )
}

export default App
