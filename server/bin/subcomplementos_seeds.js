const SubComplemento = require("../models/vpt_subcomplementos_model");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const subcomplementos = [
  {
  Complemento: '5bf29d3e44680c09a124f621',
  SubComplemento: 'Especializacion',
  Grado: 3,
  Puntos: 6,
  Retribucion: '2522,38'
},
{
  Complemento: '5bf29d3e44680c09a124f621',
  SubComplemento: 'Experiencia Requerida',
  Grado: 3,
  Puntos: 6,
  Retribucion: '2522,38' 
},
{
  Complemento: '5bf29d3e44680c09a124f621',
  SubComplemento: 'Relaciones',
  Grado: 3,
  Puntos: 6,
  Retribucion: '3363,136'
}
]

SubComplemento.create(subcomplementos, (err, vpts) => {
  if (err) {
    throw err;
  }
  console.log("Success, subcomplementos created!", subcomplementos);
  mongoose.connection.close();
});