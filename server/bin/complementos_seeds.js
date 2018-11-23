const Complemento = require("../models/vpt_complementos_model");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const complementos = [
  {
    Valor: '5bf7d1fd55bcb90b30b64b7b',
    CodDPT: 'SS125',
    Complemento: 'Desarrollo de Competencias',
    Grado: '',
    Puntos: '',
    Retribución: '',
    Subcompl : []
    },
    {
      Valor: '5bf7d1fd55bcb90b30b64b7b',
      CodDPT: 'SS125',
      Complemento: 'Complejidad Funcional',
      Grado: 3,
      Puntos: 6,
      Retribución: '',
      Subcompl : []
      },
      {
        Valor: '5bf7d1fd55bcb90b30b64b7b',
        CodDPT: 'SS125',
        Complemento: 'Tipo de Mando',
        Grado: 3,
        Puntos: 4,
        Retribución: '',
        Subcompl : []
      },
      {
        Valor: '5bf7d1fd55bcb90b30b64b7b',
        CodDPT: 'SS125',
          Complemento: 'Dificultad Técnica',
          Grado: '',
          Puntos: '',
          Retribución: '',
          Subcompl : []
          },
        {
          Valor: '5bf7d1fd55bcb90b30b64b7b',
        CodDPT: 'SS125',
          Complemento: 'Dedicación, Jornada, Turno',
          Grado: 7,
          Puntos: 10,
          Retribución: '',
          Subcompl : []
        },
        {
          Valor: '5bf7d1fd55bcb90b30b64b7b',
        CodDPT: 'SS125',
          Complemento: 'Incompatibilidad',
          Grado: 4,
          Puntos: 6,
          Retribución: '',
          Subcompl : []
        },
        {
          Valor: '5bf7d1fd55bcb90b30b64b7b',
        CodDPT: 'SS125',
          Complemento: 'Responsabilidad',
          Grado: '',
          Puntos: '',
          Retribución: '',
          Subcompl : []
          },
          {
            Valor: '5bf7d1fd55bcb90b30b64b7b',
        CodDPT: 'SS125',
            Complemento: 'Peligrosidad',
            Grado: 4,
            Puntos: 6,
            Retribución: '',
            Subcompl : []
          },
          {
            Valor: '5bf7d1fd55bcb90b30b64b7b',
        CodDPT: 'SS125',
            Complemento: 'Penosidad',
            Grado: 4,
            Puntos: 6,
            Retribución: '',
            Subcompl : []
          },
    ]
Complemento.create(complementos, (err, complementos) => {
  if (err) {
    throw err;
  }
  console.log("Success, complementos created!", complementos)
  mongoose.connection.close();
} )