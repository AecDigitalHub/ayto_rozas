const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComplementoSchema = new Schema({
  Colectivo: { type: String, enum: ['Laboral', 'Funcionario', ''], default: ''},
  Nombre: String,
  Descripcion: String,
  Grados: [{
    IndiceGrado: Number,
    Descripcion: String,
    Puntos: Number,
    Salario: {
      Unmes: String,
      Docemeses: String,
      Catorcemeses: String
    },
  }],
  Subcompl : [{
    Nombre: String,
    Descripcion: String,
    Grados: [{
      IndiceGrado: Number,
      Descripcion: String,
      Puntos: Number,
      Salario: {
        Unmes: String,
        Docemeses: String,
        Catorcemeses: String
      },
    }],
  }]
})

const Complemento = mongoose.model('Complemento', ComplementoSchema);
module.exports = Complemento;