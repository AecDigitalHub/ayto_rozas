const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalarioBaseSchema = new Schema(
  {
    Nivel: String,
		SalarioBase: String
}
)

const SalarioBase = mongoose.model('SalarioBase', SalarioBaseSchema);
module.exports = SalarioBase;