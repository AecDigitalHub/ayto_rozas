const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DPTSchema = require('./dpt_model').schema

const PuestoSchema = new Schema({
  Position: {
    type: Schema.Types.ObjectId,
    ref: 'DPT'
  },
  CodDPT: String,
  DenomPuesto: String,
  CodEmpleado: String,
  NombreEmpleado: String,
  Situacion: String
})

const Puesto = mongoose.model('Puesto', PuestoSchema);
module.exports = Puesto;