const VPTRETRIB = require('../models/vpt_retribucion_model');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const retribs = [
  {
  CodDPT: 'SS125',
  Sbase: '10260.23',
  ComplActividad: '',
  ComplVoluntario: '',
  ComplDedicacion: '',
  ComplTurnNocturn: '',
  ComplJornPartida: '',
  ComplResponsabilidad: '',
  ComplPeligro: '',
  CD: '16',
  PuestoCD: '16',
  ImportePuestoCd: '5085.04',
  PuestoCe: '16',
  ImportePuestoCE: '21838.97',
  }
]


VPTRETRIB.create(retribs, (err, retribs) => {
  if (err) {
    throw err;
  }
  console.log("Success, retribs created!", retribs);
  mongoose.connection.close();
});