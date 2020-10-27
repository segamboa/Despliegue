import React from 'react'
import { useAuthState } from '../Context/context.js'
import Nav from 'react-bootstrap/Nav'

const Navbar2 = () => {
  const user = useAuthState()
  console.log(user)
  if (user.uid && user.role !== 'visitor') {
    return <div />
  } else {
    return (
      <div className=''>
        <Nav.Link href='/login'>Login</Nav.Link>
        <Nav.Link href='/signup'>Signup</Nav.Link>
      </div>
    )
  }
}

export default Navbar2
