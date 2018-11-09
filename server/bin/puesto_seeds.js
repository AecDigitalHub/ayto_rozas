const Puesto = require("../models/puesto_model");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const puestos = [
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.17",
    NombreEmpleado: "GONZALEZ RUBIO, JUAN CARLOS",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.16",
    NombreEmpleado: "COBO LOPEZ, FERNANDO",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.15",
    NombreEmpleado: "GALLEGO MORAN, GERARDO",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.14",
    NombreEmpleado: "JIMENEZ GARCIA, PAULINO",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.18",
    NombreEmpleado: "CASTILLERO CAMPOS, MIGUEL A.",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.21",
    NombreEmpleado: "SAN JUAN ALONSO, RICARDO",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.92",
    NombreEmpleado: "SANCHEZ GUIJO, MARIA",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.28",
    NombreEmpleado: "ANTON HURTADO, JOSE LUIS",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.38",
    NombreEmpleado: "CASTAÑO CUESTA, JOSE I.",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.37",
    NombreEmpleado: "MACÍAS PÉREZ, LUIS MARÍA",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.36",
    NombreEmpleado: "SANCHEZ PEREZ, ENRIQUE",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.35",
    NombreEmpleado: "REDONDO GARCIA, FAUSTINO",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.34",
    NombreEmpleado: "MORA ZAMBRANO, MANUEL",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.33",
    NombreEmpleado: "BUSTAMANTE MARTINEZ, PEDRO",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.32",
    NombreEmpleado: "MAYORAL ALVAREZ, JULIO",
    Situacion: "P"
  },
  {
    Position: '5bcf3944e608dd17f5304bc0',
    CodDPT: "SS125",
    DenomPuesto: 'Policía Local',
    CodEmpleado: "2.D.31",
    NombreEmpleado: "CHAVEZ VAZQUEZ, JOSE",
    Situacion: "P"
  },

];

Puesto.create(puestos, (err, puestos) => {
  if (err) {
    throw err;
  }
  console.log("Success, puestos created!", puestos);
  mongoose.connection.close();
});
