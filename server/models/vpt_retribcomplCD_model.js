const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VPTRetribComplCDSchema = new Schema({

Complemento: String,
Grado: Number,
Puntos: Number,
Retribucion: String,

})


const VPTRetribComplCD = mongoose.model('VPTRetribComplCD', VPTRetribComplCDSchema);
module.exports = VPTRetribComplCD;