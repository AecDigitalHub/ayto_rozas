const retribSubComplCE = require("../models/vpt_retribSubcomplCE_model");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const retribsSubComplCE = [
	{
		"Subcomplemento": "Especialización",
		"Grado": "1",
		"Puntos": "2",
		"Retribución": "1540.798"
	},
	{
		"Subcomplemento": "Especialización",
		"Grado": "2",
		"Puntos": "4",
		"Retribución": "3081.596"
	},
	{
		"Subcomplemento": "Especialización",
		"Grado": "3",
		"Puntos": "6",
		"Retribución": "4622.3940000000002"
	},
	{
		"Subcomplemento": "Especialización",
		"Grado": "4",
		"Puntos": "8",
		"Retribución": "6163.192"
	},
	{
		"Subcomplemento": "Especialización",
		"Grado": "5",
		"Puntos": "10",
		"Retribución": "7703.99"
	},
	{
		"Subcomplemento": "Experiencia Requerida",
		"Grado": "1",
		"Puntos": "2",
		"Retribución": "1540.798"
	},
	{
		"Subcomplemento": "Experiencia Requerida",
		"Grado": "2",
		"Puntos": "4",
		"Retribución": "3081.596"
	},
	{
		"Subcomplemento": "Experiencia Requerida",
		"Grado": "3",
		"Puntos": "6",
		"Retribución": "4622.3940000000002"
	},
	{
		"Subcomplemento": "Experiencia Requerida",
		"Grado": "4",
		"Puntos": "8",
		"Retribución": "6163.192"
	},
	{
		"Subcomplemento": "Experiencia Requerida",
		"Grado": "5",
		"Puntos": "10",
		"Retribución": "7703.99"
	},
	{
		"Subcomplemento": "Relaciones",
		"Grado": "1",
		"Puntos": "0",
		"Retribución": "1540.798"
	},
	{
		"Subcomplemento": "Relaciones",
		"Grado": "2",
		"Puntos": "2",
		"Retribución": "3081.596"
	},
	{
		"Subcomplemento": "Relaciones",
		"Grado": "3",
		"Puntos": "4",
		"Retribución": "4622.3940000000002"
	},
	{
		"Subcomplemento": "Relaciones",
		"Grado": "4",
		"Puntos": "6",
		"Retribución": "6163.192"
	},
	{
		"Subcomplemento": "Relaciones",
		"Grado": "5",
		"Puntos": "8",
		"Retribución": "7703.99"
	},
	{
		"Subcomplemento": "Resultados",
		"Grado": "1",
		"Puntos": "0",
		"Retribución": "0"
	},
	{
		"Subcomplemento": "Resultados",
		"Grado": "2",
		"Puntos": "2",
		"Retribución": "3502.50"
	},
	{
		"Subcomplemento": "Resultados",
		"Grado": "3",
		"Puntos": "4",
		"Retribución": "7004.99"
	},
	{
		"Subcomplemento": "Resultados",
		"Grado": "4",
		"Puntos": "6",
		"Retribución": "10507.49"
	},
	{
		"Subcomplemento": "Resultados",
		"Grado": "5",
		"Puntos": "8",
		"Retribución": "14009.99"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "1",
		"Puntos": "0",
		"Retribución": "0"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "2",
		"Puntos": "2",
		"Retribución": "2802.00"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "3",
		"Puntos": "4",
		"Retribución": "5603.99"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "4",
		"Puntos": "5",
		"Retribución": "7004.99"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "5",
		"Puntos": "6",
		"Retribución": "8405.99"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "6",
		"Puntos": "8",
		"Retribución": "11207.99"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "7",
		"Puntos": "10",
		"Retribución": "14009.99"
	},
	{
		"Subcomplemento": ""
	}
    ]
    retribSubComplCE.create(retribsSubComplCE, (err, retribsSubComplCE) => {
  if (err) {
    throw err;
  }
  console.log("Success, retribsSubComplCE created!", retribsSubComplCE)
  mongoose.connection.close();
} )