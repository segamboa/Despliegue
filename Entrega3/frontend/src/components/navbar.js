import React from 'react'
import { useAuthState, useAuthDispatch } from '../Context/context.js'
import Nav from 'react-bootstrap/Nav'

const Navbar2 = () => {
  const user = useAuthState()
  console.log(user)
  const dispatch = useAuthDispatch()
  const logout = () => {
    dispatch({ uid: '', role: 'visitor' })
  }
  if (user.uid && user.role !== 'visitor') {
    return (
      <Nav.Link href='#' onClick={logout} className='right-nav'>Logout</Nav.Link>
    )
  } else {
    return (
      <div className='row right-nav'>
        <Nav.Link href='/login'>Login</Nav.Link>
        <Nav.Link href='/signup'>Signup</Nav.Link>
      </div>
    )
  }
}

export default Navbar2
