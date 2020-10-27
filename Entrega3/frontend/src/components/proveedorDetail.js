import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {useAuthState} from '../Context/context.js'
const axios = require('axios').default

const ProveedorDetail = () => {
  const { id } = useParams()

  let user = useAuthState()
  console.log(user)

  const [proveedor, setProveedor] = useState({
    _id: '',
    nombre: '',
    nit: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: ''
  })

  useEffect(() => {
    const getProveedor = async (id) => {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/proveedores/' + id)
      return response
    }
    getProveedor(id)
      .then(response => {
        setProveedor(response.data)
      })
      .catch(err => console.log(err))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ( 
    <div className ="texto">
      <h5>{proveedor.nombre}</h5>
        <p>
          Direccion: {proveedor.direccion} <br/>
          Ciudad: {proveedor.ciudad} <br/>
          Email: {proveedor.correo} <br/>
        </p>
      </div>
  )
}

export default ProveedorDetail
