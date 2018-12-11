const SalarioBaseLaborales = require('../models/salariobaseLaborales');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const SalariosBaseLaborales = [
	{
		"Nivel": "A1",
		"SalarioBase": "16193.71",
		"CActividad": "10319.52",
		"CVoluntario": "12435.40",
		"CActividadNuevo": "22754.92",
		"Total": "38948,64"
	},
	{
		"Nivel": "A2",
		"SalarioBase": "15047.77",
		"CActividad": "8503.31",
		"CVoluntario": "9185.26",
		"CActividadNuevo": "17688.57",
		"Total": "32736.34"
	},
	{
		"Nivel": "B",
		"SalarioBase": "0",
		"CActividad": "0",
		"CVoluntario": "0",
		"CActividadNuevo": "0",
		"Total": "0"
	},
	{
		"Nivel": "C1",
		"SalarioBase": "14310.97",
		"CActividad": "8128.68",
		"CVoluntario": "7315.53",
		"CActividadNuevo": "15444.21",
		"Total": "29755.18"
	},
	{
		"Nivel": "C2",
		"SalarioBase": "13994.14",
		"CActividad": "6948.93",
		"CVoluntario": "4244.85",
		"CActividadNuevo": "11193.79",
		"Total": "25187.92"
	},
	{
		"Nivel": "E",
		"SalarioBase": "13593.12",
		"CActividad": "5877.41",
		"CVoluntario": "3148.79",
		"CActividadNuevo": "9026.19",
		"Total": "22619.31"
	},
	{
		"Nivel": "E(No Oficial)",
		"SalarioBase": "13138.62",
		"CActividad": "4594.08",
		"CVoluntario": "4344.12",
		"CActividadNuevo": "8938.19",
		"Total": "22076.81"
	},
 ]
  
 SalarioBaseLaborales.create(SalariosBaseLaborales, (err, SalariosBaseLaborales) => {
  if (err) {
    throw err;
  }
  console.log("Success, salarios base laborales created!", SalariosBaseLaborales);
  mongoose.connection.close();
});