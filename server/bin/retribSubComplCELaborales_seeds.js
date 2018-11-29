const retribSubComplCELaborales = require("../models/vpt_retribSubcomplCELaborales");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const retribsSubComplCELaborales = [
	{
		"Subcomplemento": "Especialización",
		"Grado": "1",
		"Puntos": "2",
		"Retribución": "206.08"
	},
	{
		"Subcomplemento": "Especialización",
		"Grado": "2",
		"Puntos": "4",
		"Retribución": "412.16"
	},
	{
		"Subcomplemento": "Especialización",
		"Grado": "3",
		"Puntos": "6",
		"Retribución": "618.24"
	},
	{
		"Subcomplemento": "Especialización",
		"Grado": "4",
		"Puntos": "8",
		"Retribución": "824.32"
	},
	{
		"Subcomplemento": "Especialización",
		"Grado": "5",
		"Puntos": "10",
		"Retribución": "1030.40"
	},
	{
		"Subcomplemento": "Experiencia Requerida",
		"Grado": "1",
		"Puntos": "2",
		"Retribución": "206.08"
	},
	{
		"Subcomplemento": "Experiencia Requerida",
		"Grado": "2",
		"Puntos": "4",
		"Retribución": "412.16"
	},
	{
		"Subcomplemento": "Experiencia Requerida",
		"Grado": "3",
		"Puntos": "6",
		"Retribución": "618.24"
	},
	{
		"Subcomplemento": "Experiencia Requerida",
		"Grado": "4",
		"Puntos": "8",
		"Retribución": "824.32"
	},
	{
		"Subcomplemento": "Experiencia Requerida",
		"Grado": "5",
		"Puntos": "10",
		"Retribución": "1030.40"
	},
	{
		"Subcomplemento": "Relaciones",
		"Grado": "1",
		"Puntos": "0",
		"Retribución": "0.00"
	},
	{
		"Subcomplemento": "Relaciones",
		"Grado": "2",
		"Puntos": "2",
		"Retribución": "257.60"
	},
	{
		"Subcomplemento": "Relaciones",
		"Grado": "3",
		"Puntos": "4",
		"Retribución": "515.20"
	},
	{
		"Subcomplemento": "Relaciones",
		"Grado": "4",
		"Puntos": "6",
		"Retribución": "772.80"
	},
	{
		"Subcomplemento": "Relaciones",
		"Grado": "5",
		"Puntos": "8",
		"Retribución": "1030.40"
	},
	{
		"Subcomplemento": "Resultados",
		"Grado": "1",
		"Puntos": "0",
		"Retribución": "0.00"
	},
	{
		"Subcomplemento": "Resultados",
		"Grado": "2",
		"Puntos": "2",
		"Retribución": "715.54"
	},
	{
		"Subcomplemento": "Resultados",
		"Grado": "3",
		"Puntos": "4",
		"Retribución": "1431.08"
	},
	{
		"Subcomplemento": "Resultados",
		"Grado": "4",
		"Puntos": "6",
		"Retribución": "2146.62"
	},
	{
		"Subcomplemento": "Resultados",
		"Grado": "5",
		"Puntos": "8",
		"Retribución": "2862.16"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "1",
		"Puntos": "0",
		"Retribución": "0.00"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "2",
		"Puntos": "2",
		"Retribución": "572.43"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "3",
		"Puntos": "4",
		"Retribución": "1144.86"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "4",
		"Puntos": "5",
		"Retribución": "1431.08"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "5",
		"Puntos": "6",
		"Retribución": "1717.30"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "6",
		"Puntos": "8",
		"Retribución": "2289.73"
	},
	{
		"Subcomplemento": "Autonomía y Toma Decisiones",
		"Grado": "7",
		"Puntos": "10",
		"Retribución": "2862.16"
	},
	{
		"Subcomplemento": "Formación",
		"Grado": "1",
		"Puntos": "2",
		"Retribución": "171.73"
	},
	{
		"Subcomplemento": "Formación",
		"Grado": "2",
		"Puntos": "4",
		"Retribución": "343.47"
	},
	{
		"Subcomplemento": "Formación",
		"Grado": "3",
		"Puntos": "6",
		"Retribución": "515.20"
	},
	{
		"Subcomplemento": "Formación",
		"Grado": "4",
		"Puntos": "8",
		"Retribución": "686.93"
	},
	{
		"Subcomplemento": "Formación",
		"Grado": "5",
		"Puntos": "10",
		"Retribución": "858.67"
	},
	{
		"Subcomplemento": "Formación",
		"Grado": "6",
		"Puntos": "12",
		"Retribución": "1030.40"
	},
	{
		"Subcomplemento": "Dificultad Laboral",
		"Grado": "1",
		"Puntos": "0",
		"Retribución": "0.00"
	},
	{
		"Subcomplemento": "Dificultad Laboral",
		"Grado": "2",
		"Puntos": "2",
		"Retribución": "206.08"
	},
	{
		"Subcomplemento": "Dificultad Laboral",
		"Grado": "3",
		"Puntos": "4",
		"Retribución": "412.16"
	},
	{
		"Subcomplemento": "Dificultad Laboral",
		"Grado": "4",
		"Puntos": "6",
		"Retribución": "618.24"
	},
	{
		"Subcomplemento": "Dificultad Laboral",
		"Grado": "5",
		"Puntos": "8",
		"Retribución": "824.32"
	},
	{
		"Subcomplemento": "Dificultad Laboral",
		"Grado": "6",
		"Puntos": "10",
		"Retribución": "1030.40"
	},
	{
		"Subcomplemento": "Tipo de Mando",
		"Grado": "1",
		"Puntos": "0",
		"Retribución": "0.00"
	},
	{
		"Subcomplemento": "Tipo de Mando",
		"Grado": "2",
		"Puntos": "2",
		"Retribución": "572.43"
	},
	{
		"Subcomplemento": "Tipo de Mando",
		"Grado": "3",
		"Puntos": "4",
		"Retribución": "1144.86"
	},
	{
		"Subcomplemento": "Tipo de Mando",
		"Grado": "4",
		"Puntos": "6",
		"Retribución": "1717.30"
	},
	{
		"Subcomplemento": "Tipo de Mando",
		"Grado": "5",
		"Puntos": "8",
		"Retribución": "2289.73"
	},
	{
		"Subcomplemento": "Tipo de Mando",
		"Grado": "6",
		"Puntos": "10",
		"Retribución": "2862.16"
	},
	{
		"Subcomplemento": ""
	}
    ]
    retribSubComplCELaborales.create(retribsSubComplCELaborales, (err, retribsSubComplCELaborales) => {
  if (err) {
    throw err;
  }
  console.log("Success, retribsSubComplCELaborales created!", retribsSubComplCELaborales)
  mongoose.connection.close();
} )