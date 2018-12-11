const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalarioBaseLaboralesSchema = new Schema(
  {
    Nivel: String,
    SalarioBase: String,
    CActividad: String,
    CVoluntario: String,
    CActividadNuevo: String,
    Total: String
}
)

const SalarioBaseLaborales = mongoose.model('SalarioBaseLaborales', SalarioBaseLaboralesSchema);
module.exports = SalarioBaseLaborales;