import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
const axios = require("axios").default;

function ContratosProveedor() {
  const { id } = useParams();
  const [proveedor, setProveedor] = useState([]);
}

export default ContratosProveedor;
