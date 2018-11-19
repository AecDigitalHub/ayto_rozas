const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DPTSchema = require('./dpt_model').schema

const VPTComplSchema = new Schema({
  Position: {
    type: Schema.Types.ObjectId,
    ref: 'DPT'
  },
  CodDPT: String,
  Complementos: {
    ComplEspecifico: [
  {
  Complemento: String,
  Grado: Number,
  Puntos: Number,
  Retribución: String,
    Subcompl : [
    {
    SubComplemento: String,
    Grado: Number,
    Puntos: Number,
    Retribución: Number
    }]
  }],
  ComplDestino: [
    {
    Complemento: String,
    Grado: Number,
    Puntos: Number,
    Retribución: String,
      Subcompl : [
      {
      SubComplemento: String,
      Grado: Number,
      Puntos: Number,
      Retribución: Number
      }]
    }],
}
})


const VPTCompl = mongoose.model('VPTCompl', VPTComplSchema);
module.exports = VPTCompl;