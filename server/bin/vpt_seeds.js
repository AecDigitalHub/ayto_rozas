const VPT = require('../models/vpt_complementos_model');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const vpts = [
  {
  CodDPT: 'SS125' ,
  Complementos: [
  {
  Complemento: 'Formación',
  Grado: 3,
  Puntos: 6,
  Retribución: '',
    Subcompl : [
    {
    SubComplemento: '',
    Grado: '',
    Puntos: '',
    Retribución: ''
    }]
  },
  {
    Complemento: 'Desarrollo de Competencias',
    Grado: 4,
    Puntos: 6,
    Retribución: '',
    Subcompl : [
      {
      SubComplemento: '',
      Grado: '',
      Puntos: '',
      Retribución: ''
      }]
    },
    {
      Complemento: 'Complejidad Funcional',
      Grado: 3,
      Puntos: 6,
      Retribución: '',
      Subcompl : [
        {
        SubComplemento: '',
        Grado: '',
        Puntos: '',
        Retribución: ''
        }]
      },
      {
        Complemento: 'Tipo de Mando',
        Grado: 3,
        Puntos: 4,
        Retribución: '',
        Subcompl : [
          {
          SubComplemento: '',
          Grado: '',
          Puntos: '',
          Retribución: ''
          }]
        },
        {
          Complemento: 'Dificultad Técnica',
          Grado: '',
          Puntos: '',
          Retribución: '',
          Subcompl : [
            {
            SubComplemento: 'Especialización',
            Grado: 3,
            Puntos: 6,
            Retribución: ''
            },
            {
            SubComplemento: 'Experiencia Requerida',
            Grado: 3,
            Puntos: 6,
            Retribución: ''
            },
            {
            SubComplemento: 'Relaciones',
            Grado: 3,
            Puntos: 4,
            Retribución: ''
            },]
          },
        {
          Complemento: 'Dedicación, Jornada, Turno',
          Grado: 7,
          Puntos: 10,
          Retribución: '',
          Subcompl : [
          {
          SubComplemento: '',
          Grado: '',
          Puntos: '',
          Retribución: ''
          }]
        },
        {
          Complemento: 'Incompatibilidad',
          Grado: 4,
          Puntos: 6,
          Retribución: '',
          Subcompl : [
          {
          SubComplemento: '',
          Grado: '',
          Puntos: '',
          Retribución: ''
          }]
        },
        {
          Complemento: 'Responsabilidad',
          Grado: '',
          Puntos: '',
          Retribución: '',
          Subcompl : [
            {
            SubComplemento: 'Resultados',
            Grado: 4,
            Puntos: 6,
            Retribución: ''
            },
            {
            SubComplemento: 'Autonomía y Toma de Decisiones',
            Grado: 4,
            Puntos: 5,
            Retribución: ''
            }]
          },
          {
            Complemento: 'Peligrosidad',
            Grado: 4,
            Puntos: 6,
            Retribución: '',
            Subcompl : [
            {
            SubComplemento: '',
            Grado: '',
            Puntos: '',
            Retribución: ''
            }]
          },
          {
            Complemento: 'Penosidad',
            Grado: 4,
            Puntos: 6,
            Retribución: '',
            Subcompl : [
            {
            SubComplemento: '',
            Grado: '',
            Puntos: '',
            Retribución: ''
            }]
          },
    ]
}]

VPT.create(vpts, (err, vpts) => {
  if (err) {
    throw err;
  }
  console.log("Success, vpts created!", vpts);
  mongoose.connection.close();
});