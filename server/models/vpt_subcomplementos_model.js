const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VPTComplSchema = require('./vpt_complementos_model').schema

const VPTSubComplSchema = new Schema({
  Complemento: {
    type: Schema.Types.ObjectId,
    ref: 'VPTCompl'
  },
  SubComplemento: String,
  Grado: String,
  Puntos: String,
  Retribucion: String
})

const VPTSubCompl = mongoose.model('VPTSubCompl', VPTSubComplSchema);
module.exports = VPTSubCompl;