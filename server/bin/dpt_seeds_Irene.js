const DPT = require('../models/dpt_model');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const dpts = [
  {
    'CodigoDPT': 'CG101',
    'FichaDPT': {
      'DenomPuesto':  '',
      'OrgDirectivo': '',
      'Concejalia': '',
      'Area': '',
      'Unidad': '',
      'Escala': '',
      'Subescala': '',
      'Categoria': '',
      'Grupo': '',
      'Colectivo': '',
      'FormaProvision': '',
      'Tipo': '',
      'NumPuestosHomog': ''
    },
    'Mision': '',
    'Funciones': [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ],
    'Tareas': [
      {
       'TipoTarea': '',
       'Resultado': '',
       'TiempoDedic': ''
      }],
      'ConocExper': {
        'FormReglada': {
          'Nivel': '',
        'Titulo': '',
        },
        'FormCompl': [
          ''
        ],
        'Idiomas': [{
          'Idioma': '',
          'Nivel': '',
        }],
        'ExperPrevia': {
          'Actividad': '',
          'Tiempo': '',
        },
        'PeriodAdapt': '',
        'Habilidades': [
          '',
          '',
        ],
        'Certificaciones': [
          ''
        ],
      },
    'ResponsAut': {
      'DependFuncional': '',
      'ResponsabilidadMando': '',
      'Subordinados': '',
      'MagnitDecisiones': '',
      'GuiaOrientRecibidas': [
        '',
        ''
      ],
      'GradoSuperv': [
        '',
        ''
      ]
    },
    'RelacFuncionales': {
      'RelInternas': '',
      'RelExternas': ''
    },
    'Condiciones': {
      'Dedicacion': '',
      'Dificultad': '',
      'Responsabilidad': '',
      'Nocturnidad': '',
      'Turnicidad': '',
      'PeligrosidadPenosidad': ''
    },
    'Puestos': [],
    'Vacantes': [],
  },
 

  {
    'CodigoDPT': 'CG100',
    'FichaDPT': {
      'DenomPuesto':  '',
      'OrgDirectivo': '',
      'Concejalia': '',
      'Area': '',
      'Unidad': '',
      'Escala': '',
      'Subescala': '',
      'Categoria': '',
      'Grupo': '',
      'Colectivo': '',
      'FormaProvision': '',
      'Tipo': '',
      'NumPuestosHomog': ''
    },
    'Mision': '',
    'Funciones': [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ],
    'Tareas': [
      {
       'TipoTarea': '',
       'Resultado': '',
       'TiempoDedic': ''
      }],
      'ConocExper': {
        'FormReglada': {
          'Nivel': '',
        'Titulo': '',
        },
        'FormCompl': [
          ''
        ],
        'Idiomas': [{
          'Idioma': '',
          'Nivel': '',
        }],
        'ExperPrevia': {
          'Actividad': '',
          'Tiempo': '',
        },
        'PeriodAdapt': '',
        'Habilidades': [
          '',
          '',
        ],
        'Certificaciones': [
          ''
        ],
      },
    'ResponsAut': {
      'DependFuncional': '',
      'ResponsabilidadMando': '',
      'Subordinados': '',
      'MagnitDecisiones': '',
      'GuiaOrientRecibidas': [
        '',
        ''
      ],
      'GradoSuperv': [
        '',
        ''
      ]
    },
    'RelacFuncionales': {
      'RelInternas': '',
      'RelExternas': ''
    },
    'Condiciones': {
      'Dedicacion': '',
      'Dificultad': '',
      'Responsabilidad': '',
      'Nocturnidad': '',
      'Turnicidad': '',
      'PeligrosidadPenosidad': ''
    },
    'Puestos': [],
    'Vacantes': [],
  },
 
]

DPT.create(dpts, (err, dpts) => {
  if (err){ throw(err) }
  console.log("Success, dpts created!", dpts);
  mongoose.connection.close();
})