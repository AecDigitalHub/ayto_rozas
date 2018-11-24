const DPT = require('../models/dpt_model');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const dpts = [
  {
    'CodigoDPT': 'EE100',
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
    'CodigoDPT': 'EE101',
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
    'CodigoDPT': 'EE103',
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
    'CodigoDPT': 'EE104',
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
    'CodigoDPT': 'EE105',
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
    'CodigoDPT': 'EE106',
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
    'CodigoDPT': 'EE107',
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
    'CodigoDPT': 'CC100',
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
    'CodigoDPT': 'CC101',
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
    'CodigoDPT': 'CC102',
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
    'CodigoDPT': 'AE100',
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
    'CodigoDPT': 'AE101',
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
    'CodigoDPT': 'AE102',
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
    'CodigoDPT': 'AE103',
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
    'CodigoDPT': 'AE104',
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
    'CodigoDPT': 'AE105',
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
    'CodigoDPT': 'AE106',
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
    'CodigoDPT': 'AE107',
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
    'CodigoDPT': 'AE108',
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
    'CodigoDPT': 'RI100',
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
    'CodigoDPT': 'RI101',
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
    'CodigoDPT': 'RI102',
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
    'CodigoDPT': 'RI103',
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
    'CodigoDPT': 'RI104',
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
    'CodigoDPT': 'CG102',
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
    'CodigoDPT': 'CG103',
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
    'CodigoDPT': 'CG104',
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
    'CodigoDPT': 'CG105',
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
    'CodigoDPT': 'CG106',
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
    'CodigoDPT': 'CG107',
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
    'CodigoDPT': 'CG108',
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
    'CodigoDPT': 'CG109',
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
    'CodigoDPT': 'CG110',
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
    'CodigoDPT': 'CG112',
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
    'CodigoDPT': 'CG113',
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
    'CodigoDPT': 'CG114',
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
    'CodigoDPT': 'CG115',
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
    'CodigoDPT': 'CG116',
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
    'CodigoDPT': 'CG117',
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
    'CodigoDPT': 'CG118',
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
    'CodigoDPT': 'CG119',
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
    'CodigoDPT': 'CG120',
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
    'CodigoDPT': 'CG122',
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
    'CodigoDPT': 'CG123',
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
    'CodigoDPT': 'CG124',
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
    'CodigoDPT': 'CG125',
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
    'CodigoDPT': 'CG126',
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
      'DenomPuesto':  'Jefe Unidad Coordinaci√≥n General Gobierno',
      'OrgDirectivo': 'Concejal√≠a Delegada',
      'Concejalia': '',
      'Area': '',
      'Unidad': '',
      'Escala': '',
      'Subescala': '',
      'Categoria': '',
      'Grupo': '',
      'Colectivo': '(F) Funcionario',
      'FormaProvision': '',
      'Tipo': '',
      'NumPuestosHomog': '1'
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
       'TipoTarea': 'Derivada de Funciones Espec√≠ficas',
       'Resultado': 'Conseguir Fines y Objetivos',
       'TiempoDedic': '100%'
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
        'PeriodAdapt': '1 mes',
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
      'Subordinados': 'Si',
      'MagnitDecisiones': 'Las que se adoptan en momentos puntuales en las que no existen normas previas preestablecidas para conseguir los objetivos.',
      'GuiaOrientRecibidas': [
        'Las directrices marcadas por el superior jer√°rquico.',
        'Legislaci√≥n vigente.'
      ],
      'GradoSuperv': [
        'Por el Superior inmediato.',
        ''
      ]
    },
    'RelacFuncionales': {
      'RelInternas': 'Relaciones rec√≠procas entre Dependencias Municipales para el cumplimiento de sus fines.',
      'RelExternas': 'Relaci√≥n del puesto con los ciudadanos y otras con diversos organismos.'
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
      'Grupo': 'C2',
      'Colectivo': '(F) Funcionario',
      'FormaProvision': '',
      'Tipo': '',
      'NumPuestosHomog': '1'
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
       'TipoTarea': 'Derivada de Funciones Espec√≠ficas',
       'Resultado': 'Conseguir Fines y Objetivos',
       'TiempoDedic': '100%'
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
        'PeriodAdapt': '1 mes',
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
      'Subordinados': 'Si',
      'MagnitDecisiones': 'Las que se adoptan en momentos puntuales en las que no existen normas previas preestablecidas para conseguir los objetivos.',
      'GuiaOrientRecibidas': [
        'Las directrices marcadas por el superior jer√°rquico.',
        'Legislaci√≥n vigente.'
      ],
      'GradoSuperv': [
        'Por el Superior inmediato.',
        ''
      ]
    },
    'RelacFuncionales': {
      'RelInternas': 'Relaciones rec√≠procas entre Dependencias Municipales para el cumplimiento de sus fines.',
      'RelExternas': 'Relaci√≥n del puesto con los ciudadanos y otras con diversos organismos.'
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
    'CodigoDPT': 'CG102',
    'FichaDPT': {
      'DenomPuesto':  'Secretaria General',
      'OrgDirectivo': '',
      'Concejalia': '',
      'Area': '',
      'Unidad': '',
      'Escala': '',
      'Subescala': '',
      'Categoria': '',
      'Grupo': '',
      'Colectivo': '(F) Funcionario',
      'FormaProvision': '',
      'Tipo': '',
      'NumPuestosHomog': '1'
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
       'TipoTarea': 'Derivada de Funciones Espec√≠ficas',
       'Resultado': 'Conseguir Fines y Objetivos',
       'TiempoDedic': '100%'
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
        'PeriodAdapt': '1 mes',
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
      'Subordinados': 'Si',
      'MagnitDecisiones': 'Las que se adoptan en momentos puntuales en las que no existen normas previas preestablecidas para conseguir los objetivos.',
      'GuiaOrientRecibidas': [
        'Las directrices marcadas por el superior jer√°rquico.',
        'Legislaci√≥n vigente.'
      ],
      'GradoSuperv': [
        'Por el Superior inmediato.',
        ''
      ]
    },
    'RelacFuncionales': {
      'RelInternas': 'Relaciones rec√≠procas entre Dependencias Municipales para el cumplimiento de sus fines.',
      'RelExternas': 'Relaci√≥n del puesto con los ciudadanos y otras con diversos organismos.'
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
    'CodigoDPT': 'CG103',
    'FichaDPT': {
      'DenomPuesto':  'Vicesecretario/a',
      'OrgDirectivo': ' ',
      'Concejalia': '',
      'Area': '   ',
      'Unidad': ' ',
      'Escala': '',
      'Subescala': '',
      'Categoria': '',
      'Grupo': '',
      'Colectivo': '(F) Funcionario',
      'FormaProvision': '',
      'Tipo': '',
      'NumPuestosHomog': '1'
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
       'TipoTarea': 'Derivada de Funciones Espec√≠ficas',
       'Resultado': 'Conseguir Fines y Objetivos',
       'TiempoDedic': '100%'
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
        'PeriodAdapt': '1 mes',
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
      'Subordinados': 'Si',
      'MagnitDecisiones': 'Las que se adoptan en momentos puntuales en las que no existen normas previas preestablecidas para conseguir los objetivos.',
      'GuiaOrientRecibidas': [
        'Las directrices marcadas por el superior jer√°rquico.',
        'Legislaci√≥n vigente.'
      ],
      'GradoSuperv': [
        'Por el Superior inmediato.',
        ''
      ]
    },
    'RelacFuncionales': {
      'RelInternas': 'Relaciones rec√≠procas entre Dependencias Municipales para el cumplimiento de sus fines.',
      'RelExternas': 'Relaci√≥n del puesto con los ciudadanos y otras con diversos organismos.'
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