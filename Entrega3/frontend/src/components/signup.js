import React from 'react'
import useForm from '../customHooks/useForm.js'
import Button from 'react-bootstrap/Button'
import { useAuthDispatch } from '../Context/context.js'
import { useHistory } from 'react-router-dom'
const axios = require('axios').default

const Signup = () => {
  const dispatch = useAuthDispatch()

  const validate = (values) => {
    const errs = {}
    if (!values.username) {
      errs.username = 'Must provide a username'
    }
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!values.email || !values.email.match(emailFormat)) {
      errs.email = 'Must provide a valid email'
    }
    if (!values.password || values.password.length < 8) {
      errs.password = 'Email must be at least 8 characters long'
    }
    if (values.password !== values.confirmPassword) {
      errs.confirmPassword = 'Passwords must match'
    }
    return errs
  }

  const history = useHistory()

  const signup = (values) => {
    values.role = 'cliente'
    axios.post(process.env.REACT_APP_API_URL + '/users', values)
      .then(resp => {
        const response = resp.data[0]
        const action = { uid: response._id, role: response.role }
        dispatch(action)
        history.push('/')
      })
      .catch(err => console.log(err))
  }

  const { handleChange, handleSubmit, errors } = useForm(
    {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    signup,
    validate
  )

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' className='form-control' onChange={handleChange} />
        {errors.username && (
          <div className='text-danger'> {errors.username} </div>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' className='form-control' onChange={handleChange} />
        {errors.email && (
          <div className='text-danger'> {errors.email} </div>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' className='form-control' onChange={handleChange} />
        {errors.password && (
          <div className='text-danger'> {errors.password} </div>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='confirmPassword'>Confirm password</label>
        <input type='password' id='confirmPassword' name='confirmPassword' className='form-control' onChange={handleChange} />
        {errors.confirmPassword && (
          <div className='text-danger'> {errors.confirmPassword} </div>
        )}
      </div>
      <Button variant='success' type='submit'>Signup</Button>
    </form>
  )
}

export default Signup
