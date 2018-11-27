const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DPTSchema = require('./dpt_model').schema
const ValorSchema = require('./vpt_model').schema
const VPTSubComplSchema = require('./vpt_subcomplementos_model').schema


const VPTComplSchema = new Schema({

Valor: {
  type: Schema.Types.ObjectId,
  ref: 'Valor'
},
CodDPT: String,
Complemento: String,
Grado: Number,
Puntos: Number,
Retribucion: String,
Subcomplementos : [{ type: Schema.Types.ObjectId, ref: 'VPTSubCompl' }],
AvgGrado: String,
AvgPuntos: String,
AvgRetribucion: String
})


const VPTCompl = mongoose.model('VPTCompl', VPTComplSchema);
module.exports = VPTCompl;