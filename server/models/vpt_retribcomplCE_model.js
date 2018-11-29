const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VPTRetribComplCESchema = new Schema({

Complemento: String,
Grado: Number,
Puntos: Number,
Retribución: String,

})


const VPTRetribComplCE = mongoose.model('VPTRetribComplCE', VPTRetribComplCESchema);
module.exports = VPTRetribComplCE;