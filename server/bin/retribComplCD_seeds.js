const retribComplCD = require("../models/vpt_retribcomplCD_model");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const retribsComplCD = [
 
	{
		"Complemento": "Especialización Formación",
		"Grado": "1",
		"Puntos": "1.25",
		"Retribucion": "395.94"
	},
	{
		"Complemento": "Especialización Formación",
		"Grado": "2",
		"Puntos": "2.5",
		"Retribucion": "791.88"
	},
	{
		"Complemento": "Especialización Formación",
		"Grado": "3",
		"Puntos": "3.75",
		"Retribucion": "1187.81"
	},
	{
		"Complemento": "Especialización Formación",
		"Grado": "4",
		"Puntos": "5",
		"Retribucion": "1583.75"
	},
	{
		"Complemento": "Especialización Formación",
		"Grado": "5",
		"Puntos": "6.25",
		"Retribucion": "1979.69"
	},
	{
		"Complemento": "Especialización Formación",
		"Grado": "6",
		"Puntos": "7.5",
		"Retribucion": "3801"
	},
	{
		"Complemento": "Desarrollo Competencias",
		"Grado": "1",
		"Puntos": "1.25",
		"Retribucion": "0.00"
	},
	{
		"Complemento": "Desarrollo Competencias",
		"Grado": "2",
		"Puntos": "2.5",
		"Retribucion": "478.61"
	},
	{
		"Complemento": "Desarrollo Competencias",
		"Grado": "3",
		"Puntos": "3.75",
		"Retribucion": "957.23"
	},
	{
		"Complemento": "Desarrollo Competencias",
		"Grado": "4",
		"Puntos": "5",
		"Retribucion": "1435.84"
	},
	{
		"Complemento": "Desarrollo Competencias",
		"Grado": "5",
		"Puntos": "6.25",
		"Retribucion": "1914.45"
	},
	{
		"Complemento": "Desarrollo Competencias",
		"Grado": "6",
		"Puntos": "7.5",
		"Retribucion": "2393.09"
	},
	{
		"Complemento": "Complejidad Funcional",
		"Grado": "1",
		"Puntos": "1.25",
		"Retribucion": "0.00"
	},
	{
		"Complemento": "Complejidad Funcional",
		"Grado": "2",
		"Puntos": "2.5",
		"Retribucion": "1041.72"
	},
	{
		"Complemento": "Complejidad Funcional",
		"Grado": "3",
		"Puntos": "3.75",
		"Retribucion": "2083.43"
	},
	{
		"Complemento": "Complejidad Funcional",
		"Grado": "4",
		"Puntos": "5",
		"Retribucion": "3125.15"
	},
	{
		"Complemento": "Complejidad Funcional",
		"Grado": "5",
		"Puntos": "6.25",
		"Retribucion": "4166.87"
	},
	{
		"Complemento": "Complejidad Funcional",
		"Grado": "6",
		"Puntos": "7.5",
		"Retribucion": "5208.00"
	},
	{
		"Complemento": "Tipo de Mando",
		"Grado": "1",
		"Puntos": "1.25",
		"Retribucion": "0"
	},
	{
		"Complemento": "Tipo de Mando",
		"Grado": "2",
		"Puntos": "2.5",
		"Retribucion": "668.57"
	},
	{
		"Complemento": "Tipo de Mando",
		"Grado": "3",
		"Puntos": "3.75",
		"Retribucion": "1002.86"
	},
	{
		"Complemento": "Tipo de Mando",
		"Grado": "4",
		"Puntos": "5",
		"Retribucion": "1337.15"
	},
	{
		"Complemento": "Tipo de Mando",
		"Grado": "5",
		"Puntos": "6.25",
		"Retribucion": "1671.43"
	},
	{
		"Complemento": "Tipo de Mando",
		"Grado": "6",
		"Puntos": "7.5",
		"Retribucion": "2674.29"
	},
	{
		"Complemento": ""
	}

    ]
    retribComplCD.create(retribsComplCD, (err, retribsComplCD) => {
  if (err) {
    throw err;
  }
  console.log("Success, retribsComplCD created!", retribsComplCD)
  mongoose.connection.close();
} )