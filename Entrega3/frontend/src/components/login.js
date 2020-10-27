import React from 'react'
import useForm from '../customHooks/useForm.js'
import Button from 'react-bootstrap/Button'
import { useAuthDispatch } from '../Context/context.js'
import { useHistory } from 'react-router-dom'
const axios = require('axios').default

const Login = () => {
  const dispatch = useAuthDispatch()

  const validate = (values) => {
    return {}
  }


  const history = useHistory()

  const login = (values) => {
    axios.post(process.env.REACT_APP_API_URL + '/auth/login', values)
      .then(resp => {
        const response = resp.data
        const action = { uid: response.id, role: response.role }
        dispatch(action)
        history.push('/')
      })
      .catch(err => console.log(err))
  }

  const { handleChange, handleSubmit, errors } = useForm(
    {
      username: '',
      password: ''
    },
    login,
    validate
  )

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' className='form-control' onChange={handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' className='form-control' onChange={handleChange} />
      </div>
      <Button variant='success' type='submit'>Login</Button>
    </form>
  )
}

export default Login
