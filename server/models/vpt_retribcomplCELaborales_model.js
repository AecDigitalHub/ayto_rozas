const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VPTRetribComplCELaboralesSchema = new Schema({

Complemento: String,
Grado: Number,
Puntos: Number,
Retribución: String,

})


const VPTRetribComplCELaborales = mongoose.model('VPTRetribComplCELaborales', VPTRetribComplCELaboralesSchema);
module.exports = VPTRetribComplCELaborales;