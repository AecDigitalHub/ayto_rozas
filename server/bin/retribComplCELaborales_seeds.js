const retribComplCELaborales = require("../models/vpt_retribcomplCELaborales_model");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const retribsComplCELaborales = [
	
	{
		"Complemento": "Dificultad Técnica",
		"Grado": "0",
		"Puntos": "0",
		"Retribución": "0"
	},
	{
		"Complemento": "Dedicación, Jornada, Turno",
		"Grado": " 1",
		"Puntos": " 0",
		"Retribución": "0"
	},
	{
		"Complemento": "Dedicación, Jornada, Turno",
		"Grado": " 2",
		"Puntos": " 2",
		"Retribución": "1051,57"
	},
	{
		"Complemento": "Dedicación, Jornada, Turno",
		"Grado": " 3",
		"Puntos": " 4",
		"Retribución": "2103,14"
	},
	{
		"Complemento": "Dedicación, Jornada, Turno",
		"Grado": " 4",
		"Puntos": " 6",
		"Retribución": "3154,70"
	},
	{
		"Complemento": "Dedicación, Jornada, Turno",
		"Grado": " 5",
		"Puntos": " 8",
		"Retribución": "4206,27"
	},
	{
		"Complemento": "Dedicación, Jornada, Turno",
		"Grado": " 6",
		"Puntos": " 10",
		"Retribución": "5257,84"
	},
	{
		"Complemento": "Incompatibilidad",
		"Grado": "1",
		"Puntos": "2",
		"Retribución": "420.39666666666665"
	},
	{
		"Complemento": "Incompatibilidad",
		"Grado": "2",
		"Puntos": "4",
		"Retribución": "840.79333333333329"
	},
	{
		"Complemento": "Incompatibilidad",
		"Grado": "3",
		"Puntos": "6",
		"Retribución": "1261.1899999999998"
	},
	{
		"Complemento": "Incompatibilidad",
		"Grado": "4",
		"Puntos": "8",
		"Retribución": "1681.5866666666666"
	},
	{
		"Complemento": "Incompatibilidad",
		"Grado": "5",
		"Puntos": "10",
		"Retribución": "2101.9833333333336"
	},
	{
		"Complemento": "Responsabilidad",
		"Grado": "0",
		"Puntos": "0",
		"Retribución": "0"
	},
	{
		"Complemento": "Peligrosidad",
		"Grado": "1",
		"Puntos": "0",
		"Retribución": "0.00"
	},
	{
		"Complemento": "Peligrosidad",
		"Grado": "2",
		"Puntos": "2",
		"Retribución": "429.33"
	},
	{
		"Complemento": "Peligrosidad",
		"Grado": "3",
		"Puntos": "4",
		"Retribución": "858.67"
	},
	{
		"Complemento": "Peligrosidad",
		"Grado": "4",
		"Puntos": "6",
		"Retribución": "1288.00"
	},
	{
		"Complemento": "Peligrosidad",
		"Grado": "5",
		"Puntos": "8",
		"Retribución": "1717.33"
	},
	{
		"Complemento": "Penosidad",
		"Grado": "1",
		"Puntos": "0",
		"Retribución": "0.00"
	},
	{
		"Complemento": "Penosidad",
		"Grado": "2",
		"Puntos": "2",
		"Retribución": "429.33"
	},
	{
		"Complemento": "Penosidad",
		"Grado": "3",
		"Puntos": "4",
		"Retribución": "858.67"
	},
	{
		"Complemento": "Penosidad",
		"Grado": "4",
		"Puntos": "6",
		"Retribución": "1288.00"
	},
	{
		"Complemento": "Penosidad",
		"Grado": "5",
		"Puntos": "8",
		"Retribución": "1717.33"
	},
	{
		"Complemento": ""
	}


    ]
    retribComplCELaborales.create(retribsComplCELaborales, (err, retribsComplCELaborales) => {
  if (err) {
    throw err;
  }
  console.log("Success, retribsComplCELaborales created!", retribsComplCELaborales)
  mongoose.connection.close();
} )