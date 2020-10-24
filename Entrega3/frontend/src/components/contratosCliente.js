import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
const axios = require("axios").default;

const contratosCliente = () => {
  const { id } = useParams();

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/clientes/contratos/' + id)
      .then(response => {
        console.log(response.data)
        //setEmpresa(response.data)
      })
      .catch(err => console.log(err))
  }, [])
};
