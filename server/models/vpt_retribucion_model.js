const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DPTSchema = require('./dpt_model').schema


const VPTRetribSchema = new Schema({
  CodDPT: String,
  Sbase: String,
  ComplActividad: String,
  ComplVoluntario: String,
  ComplDedicacion: String,
  ComplTurnNocturn: String,
  ComplJornPartida: String,
  ComplResponsabilidad: String,
  ComplPeligro: String,
  CD: String,
  PuestoCD: String,
  ImportePuestoCd: String,
  PuestoCe: String,
  ImportePuestoCE: String,
})

const VPTRetrib = mongoose.model('VPTRetrib', VPTRetribSchema);
module.exports = VPTRetrib;