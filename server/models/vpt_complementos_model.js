const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DPTSchema = require('./dpt_model').schema
const VPTSubComplSchema = require('./vpt_subcomplementos_model').schema


// const VPTComplSchema = new Schema({
//   Position: {
//     type: Schema.Types.ObjectId,
//     ref: 'DPT'
//   },
//   CodDPT: String,
//   Complementos: {
//     ComplEspecifico: [
//   {
//   Complemento: String,
//   Grado: Number,
//   Puntos: Number,
//   Retribución: String,
//     Subcompl : [
//     {
//     SubComplemento: String,
//     Grado: Number,
//     Puntos: Number,
//     Retribución: Number
//     }]
//   }],
//   ComplDestino: [
//     {
//     Complemento: String,
//     Grado: Number,
//     Puntos: Number,
//     Retribución: String,
//       Subcompl : [
//       {
//       SubComplemento: String,
//       Grado: Number,
//       Puntos: Number,
//       Retribución: Number
//       }]
//     }],
// }
// })

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
  Subcomplementos : [{type: Schema.Types.ObjectId, ref: 'VPTSubCompl'}]
  }],
  ComplDestino: [
    {
    Complemento: String,
    Grado: Number,
    Puntos: Number,
    Retribución: String,
    Subcomplementos : [{type: Schema.Types.ObjectId, ref: 'VPTSubCompl'}]
  }],
}
})


const VPTCompl = mongoose.model('VPTCompl', VPTComplSchema);
module.exports = VPTCompl;