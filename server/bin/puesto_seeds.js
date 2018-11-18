const Puesto = require("../models/puesto_model");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const puestos = [  
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "600.E.15",
      "NombreEmpleado": "LOSA FUNES, ANGEL",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "60.E.14",
      "NombreEmpleado": "PEREZ SUAREZ, MIGUEL A.",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "60.E.21",
      "NombreEmpleado": "BARRADO BONILLA, JOSE A.",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "60.E.19",
      "NombreEmpleado": "VACANTE",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "600.E.16",
      "NombreEmpleado": "DOMINGUEZ ALENDA, ALBERTO",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "60.E.15",
      "NombreEmpleado": "TIRADO GARCIA, JUAN J.",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "60.E.11",
      "NombreEmpleado": "MORAN COVARRUBIAS, JOSE",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "60.E.13",
      "NombreEmpleado": "MARTIN LOPEZ, LUIS",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "60.E.10",
      "NombreEmpleado": "VACANTE",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "60.E.16",
      "NombreEmpleado": "BRAVO RUBIO, MANUEL",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "600.E.31",
      "NombreEmpleado": "BARRAGAN LOPEZ, JOSE ANTONIO",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "600.E.17",
      "NombreEmpleado": "FERNANDEZ GONZALEZ, RUBEN",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "600.E.21",
      "NombreEmpleado": "DIAZ PEREZ, JOSE",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "600.E.18",
      "NombreEmpleado": "JIMENEZ JIMENEZ, JUAN L.",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "600.E.24",
      "NombreEmpleado": "ROLDAN CAÑAS, FELIX",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "600.E.23",
      "NombreEmpleado": "LEO RODRIGUEZ, JUAN ANDRES",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "600.E.25",
      "NombreEmpleado": "SANZ NUÑO, RICARDO",
      "Situacion": ""
    },
    {
      "Position": "5befc92bab112103d221cda0",
      "CodDPT": "SC106",
      "DenomPuesto": "Operario Infraestructuras",
      "CodEmpleado": "600.E.20",
      "NombreEmpleado": "DIAZ ORTEGA, ANGEL",
      "Situacion": ""
    }
];

Puesto.create(puestos, (err, puestos) => {
  if (err) {
    throw err;
  }
  console.log("Success, puestos created!", puestos);
  mongoose.connection.close();
});
