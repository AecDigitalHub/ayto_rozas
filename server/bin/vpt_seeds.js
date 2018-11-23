const VPT = require('../models/vpt_model');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const vpts = [
  {
  Position: "5be846c9d3502d0d564a93b4",
  CodDPT: 'SS125' ,
  Complementos: {
    ComplDestino: [],
    ComplEspecifico: [],
  }
}]
  
VPT.create(vpts, (err, vpts) => {
  if (err) {
    throw err;
  }
  console.log("Success, vpts created!", vpts);
  mongoose.connection.close();
});