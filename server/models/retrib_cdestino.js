const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RetribCDestinoSchema = new Schema(
  {
  Puntos: String,
  Retribucion: String,
}
)

const RetribCDestino = mongoose.model('RetribCDestino', RetribCDestinoSchema);
module.exports = RetribCDestino;