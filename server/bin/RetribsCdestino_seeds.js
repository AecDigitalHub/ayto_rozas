const RetribsCDestino = require('../models/retrib_cdestino');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const RetribsCdestino = [
  {
		"Puntos": "30",
		"Retribucion": "14077.34"
	},
	{
		"Puntos": "29",
		"Retribucion": "12626.77"
	},
	{
		"Puntos": "28",
		"Retribucion": "12096.00"
	},
	{
		"Puntos": "27",
		"Retribucion": "11564.80"
	},
	{
		"Puntos": "26",
		"Retribucion": "10146.00"
	},
	{
		"Puntos": "25",
		"Retribucion": "9001.84"
	},
	{
		"Puntos": "24",
		"Retribucion": "8470.65"
	},
	{
		"Puntos": "23",
		"Retribucion": "7940.16"
	},
	{
		"Puntos": "22",
		"Retribucion": "7408.68"
	},
	{
		"Puntos": "21",
		"Retribucion": "6878.63"
	},
	{
		"Puntos": "20",
		"Retribucion": "6389.59"
	},
	{
		"Puntos": "19",
		"Retribucion": "6063.38"
	},
	{
		"Puntos": "18",
		"Retribucion": "5736.89"
	},
	{
		"Puntos": "17",
		"Retribucion": "5410.68"
	},
	{
		"Puntos": "16",
		"Retribucion": "5085.04"
	},
	{
		"Puntos": "15",
		"Retribucion": "4758.26"
	},
	{
		"Puntos": "14",
		"Retribucion": "4432.47"
	},
	{
		"Puntos": "13",
		"Retribucion": "4105.69"
	},
	{
		"Puntos": "12",
		"Retribucion": "3779.34"
	},
	{
		"Puntos": "11",
		"Retribucion": "3452.99"
	},
	{
		"Puntos": "10",
		"Retribucion": "3127.20"
	},
	{
		"Puntos": "9",
		"Retribucion": "2964.10"
	},
	{
		"Puntos": "8",
		"Retribucion": "2800.42"
	},
	{
		"Puntos": "7",
		"Retribucion": "2637.60"
	},
	{
		"Puntos": "6",
		"Retribucion": "2474.36"
	},
	{
		"Puntos": "5",
		"Retribucion": "2311.25"
	},
	{
		"Puntos": "4",
		"Retribucion": "2066.66"
	},
	{
		"Puntos": "3",
		"Retribucion": "1822.65"
	},
	{
		"Puntos": "2",
		"Retribucion": "1577.78"
	},
	{
		"Puntos": "1",
		"Retribucion": "1333.33"
	},
	{
		"Puntos": ""
	}
 ]
  
RetribsCDestino.create(RetribsCdestino, (err, RetribsCdestino) => {
  if (err) {
    throw err;
  }
  console.log("Success, retribs created!", RetribsCdestino);
  mongoose.connection.close();
});