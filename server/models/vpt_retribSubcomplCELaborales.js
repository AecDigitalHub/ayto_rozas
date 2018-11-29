const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VPTRetribSubComplCELaboralesSchema = new Schema({

Subcomplemento: String,
Grado: Number,
Puntos: Number,
Retribución: String,

})


const VPTRetribSubComplCELaborales = mongoose.model('VPTRetribSubComplCELaborales', VPTRetribSubComplCELaboralesSchema);
module.exports = VPTRetribSubComplCELaborales;