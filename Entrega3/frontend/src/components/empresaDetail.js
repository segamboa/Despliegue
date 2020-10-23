import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
const axios = require('axios').default

const EmpresaDetail = () => {
  const { id } = useParams()

  const [empresa, setEmpresa] = useState({
    _id: '',
    nombre: '',
    nit: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: ''
  })

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/empresas/' + id)
      .then(response => {
        console.log(response.data)
        setEmpresa(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  return <h1>{empresa.nombre}</h1>
}

export default EmpresaDetail
