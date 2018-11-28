const SalarioBase = require('../models/salariobase');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const SalariosBase = [
	{
		"Nivel": "A1",
		"SalarioBase": "15234.60"
	},
	{
		"Nivel": "A2",
		"SalarioBase": "13396.43"
	},
	{
		"Nivel": "B",
		"SalarioBase": "11945.14"
	},
	{
		"Nivel": "C1",
		"SalarioBase": "10260.23"
	},
	{
		"Nivel": "C2",
		"SalarioBase": "8696.76"
	},
	{
		"Nivel": "E",
		"SalarioBase": "7970.08"
	},
 ]
  
 SalarioBase.create(SalariosBase, (err, SalariosBase) => {
  if (err) {
    throw err;
  }
  console.log("Success, salarios base created!", SalariosBase);
  mongoose.connection.close();
});