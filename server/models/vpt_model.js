const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DPTSchema = require('./dpt_model').schema
const VPTSubComplSchema = require('./vpt_subcomplementos_model').schema
const VPTComplSchema = require('./vpt_complementos_model').schema


const ValorSchema = new Schema({

Position: {
  type: Schema.Types.ObjectId,
  ref: 'DPT'
},
CodDPT: String,
Complementos: {
  ComplEspecifico: [{type: Schema.Types.ObjectId, ref: 'VPTCompl'}],
  TotCE: String,
  TotPuntosCE: String,
  ComplDestino: [{type: Schema.Types.ObjectId, ref: 'VPTCompl'}],
  TotCD: String,
  TotPuntosCD: String,
},
SalarioBase: String,
CActividad: String,
})

const Valor = mongoose.model('Valor', ValorSchema);
module.exports = Valor;