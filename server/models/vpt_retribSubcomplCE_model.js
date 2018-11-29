const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VPTRetribSubComplCESchema = new Schema({

Subcomplemento: String,
Grado: Number,
Puntos: Number,
Retribución: String,

})


const VPTRetribSubComplCE = mongoose.model('VPTRetribSubComplCE', VPTRetribSubComplCESchema);
module.exports = VPTRetribSubComplCE;