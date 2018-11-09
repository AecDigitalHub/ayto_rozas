const DPT = require('../models/dpt_model');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const dpts = [
  {
  'CodigoDPT': 'EC101',
  'FichaDPT': {
    'DenomPuesto':  'Adj. Jefe Serv. Infraestructura. Ciudad (Espacios a la ciudad),Urbanismo, Conservación y M. Ambiente',
    'OrgDirectivo': 'Concejalía Delegada',
    'Concejalia': 'Conservación y Medio Ambiente',
    'Area': 'Servicios a la Ciudad',
    'CodArea': '01',
    'Unidad': 'Espacios a la Ciudad',
    'Escala': '(AE) Administración Especial',
    'Subescala': 'Técnico',
    'Categoria': 'Superior',
    'Grupo': 'A1',
    'Colectivo': '(F) Funcionario',
    'FormaProvision': '(LD) Libre Designación',
    'Tipo': '(NS) No Singularizado',
    'NumPuestosHomog': '1'
  },
  'Mision': 'Ejecuta y realiza el seguimiento de servicios, obras y expedientes según las directrices dadas por la Jefatura de Servicio de Espacios a la Ciudad.',
  'Funciones': [
    'Apoyo y supervisión en la conservación, mantenimiento, ejecución de obras, instalaciones e infraestructuras de zonas verdes municipales, medio ambiente urbano y natural, así como la tramitación de autorizaciones sobre uso y disfrute de parques y zonas verdes, medio ambiente urbano y natural.',
    'Apoyo en la confección de pliegos de condiciones técnicas',
    'Apoyo en la confección y supervisión de proyectos, obras, instalaciones e infraestructuras referentes al medio ambiente urbano y natural.',
    'Control y supervisión de plagas y enfermedades vegetales, técnicas de arboricultura, selección de planta ornamental y forestal, botánica, tratamientos silvícolas y prevención de incendios forestales.',
    'Tramitación de expedientes administrativos en medio ambiente urbano y natural, residuos urbanos, parques y jardines.',
    'Apoyo, seguimiento y supervisión de contratos de residuos municipales y limpieza viaria, así como en tecnologías asociadas a la gestión de residuos, recogida, reciclaje, puntos limpios, clasificación y valorización.',
    'Apoyo, seguimiento y supervisión en la implantación de las políticas y estrategias de educación, fomento y protección medioambiental de competencia municipal.',
    'Empleo de normativa de contratos públicos, equipamiento e instalaciones de parques públicos, residuos, medio ambiente urbano y natural, normativa urbanística, ejercicio de la potestad sancionadora y en la confección de informes, evaluaciones ambientales, así como tramitación de autorizaciones de carácter ambiental.',
  ],
  'Tareas': [
    {
     'TipoTarea': 'Derivada de Funciones Específicas',
     'Resultado': 'Conseguir Fines y Objetivos',
     'TiempoDedic': '100%'
    }],
  'ConocExper': {
  'FormReglada': {
      'Nivel': 'A2',
      'Titulo': 'Diplomado, Ingeniero Técnico o Grado',
    }
  },
  'FormCompl': [
    'Ofimática media', 
    'Conocimientos sistemas informáticos de software técnico; Autocad, GIS, Ofimática, Bases de datos, Presto.',
    'Contratación pública', 
    'Legislación medioambiental', 
    'Normativa de Prevención de Riesgos laborales',
    'Gestión, logística y tratamiento de residuos urbanos',
  ],
  'Idiomas': {
      'Idioma': '',
      'Nivel': '',
    },
  'ExperPrevia': {
      'Actividad': '',
      'Tiempo': ''
    },
  'PeriodAdapt': '2 meses',
  'Habilidades': [
    ' Gest. Equipos',
    'Liderazgo',
  ],
  'Certificaciones': [''],
  'ResponsAut': {
    'DependFuncional': 'Jefe Serv. Infraestr. Ciudad',
    'ResponsabilidadMando': 'Sí',
    'Subordinados': 'Téc. Aux. Zonas Verdes, Téc. Sup. Medio Ambiente , Encargado (Patrimonio Verde), Oficial, Conductor y Operarios,',
    'MagnitDecisiones': 'Las que se adoptan en momentos puntuales en las que no existen normas previas preestablecidas para conseguir los objetivos.',
    'GuiaOrientRecibidas': [
      'Las directrices marcadas por el superior jerárquico.',
      'Legislación vigente.'
    ],
    'GradoSuperv': 'Por el Superior inmediato.'
  },
  'RelacFuncionales': {
    'RelInternas': 'Relaciones recíprocas entre Dependencias Municipales para el cumplimiento de sus fines. También las derivadas de exigir el cumplimiento de las obligaciones del subordinado.',
    'RelExternas': 'Relación del puesto con los ciudadanos y otras con diversos organismos. Relación con Confederación Hidrográfica del Tajo, Canal de Isabel II.Compañias suministradoras , Comunidad de Madrid, Mancomunidad del Sur'
  },
  'Condiciones': {
    'Dedicacion': 'Sí',
    'Dificultad': 'Sí',
    'Responsabilidad': 'Sí',
    'Nocturnidad': 'No',
    'Turnicidad': 'No',
    'PeligrosidadPenosidad': 'No'
  },
  },
  {
    'CodigoDPT': 'SS125',
    'FichaDPT': {
      'DenomPuesto':  'Policía Local',
      'OrgDirectivo': 'Concejalía Delegada',
      'Concejalia': 'Seguridad y Orden Público - Seguridad Ciudadana',
      'Area': 'Seguridad Ciudadana, Protección Civil-Samer, Movilidad y Distrito Norte',
      'Unidad': 'Policía Local (Servicios Operativos)',
      'Escala': '(AE) Administración Especial',
      'Subescala': 'Básica',
      'Categoria': '',
      'Grupo': 'C1',
      'Colectivo': '(F) Funcionario',
      'FormaProvision': '(C) Concurso',
      'Tipo': '(NS) No Singularizado',
      'NumPuestosHomog': '78'
    },
    'Mision': 'Puesto de trabajo obligatorio establecido la Ley 1/2018, de 22 de febrero, de Coordinación de Policías Locales de la Comunidad de Madrid, cuya misión es: ejecución de los servicios, en la medida de las posibilidades que proporcionan los recursos y mando superior para el buen funcionamiento del Servicio, garantizando lo que establece la Constitución y el resto del ordenamiento jurídico.',
    'Funciones': [
      'Ejercer la policía administrativa en relación al cumplimiento de las ordenanzas, bandos y demás disposiciones municipales, así como de otras normas autonómicas y estatales, dentro del ámbito de sus competencias.',
      'Ordenar, señalizar y dirigir el tráfico en el casco urbano y en las vías de titularidad municipal, de acuerdo con lo establecido en las normas de circulación, sin perjuicio de las funciones atribuidas a otros Cuerpos de funcionarios creados en los respectivos ayuntamientos, así como participar en la educación vial.',
      'Instruir atestados por accidentes de circulación y delitos contra la seguridad vial dentro del casco urbano y en las vías de titularidad municipal.',
      'Velar por el cumplimiento de las disposiciones dictadas en materia de protección del medio ambiente cuando las funciones de vigilancia sean competencia municipal, bien originaria o delegada.',
      'Proteger a las autoridades de las corporaciones locales y la vigilancia o custodia de los edificios e instalaciones de titularidad municipal.',
      'Participar con las Fuerzas y Cuerpos de Seguridad del Estado en el ejercicio de funciones de policía judicial, en el marco determinado en la normativa vigente y los protocolos de actuación y los acuerdos de colaboración suscritos con el Estado.',
      'Prestar auxilio en los casos de accidentes, catástrofes o calamidad pública participando, en la forma prevista en las leyes, en la ejecución de los planes de protección civil.',
      'Efectuar las diligencias de prevención y cuantas actuaciones tiendan a evitar la comisión de actos delictivos o su comprobación.',
      'Vigilar los espacios públicos, ejercer las funciones de policía de proximidad y proteger los entornos socio escolares y a los colectivos vulnerables.',
      'Participar con las Fuerzas y Cuerpos de Seguridad del Estado en la protección de las víctimas de la violencia de género, y cooperar con los servicios y otros agentes sociales en el desarrollo de sus funciones.',
      'Colaborar con las Fuerzas y Cuerpos de Seguridad del Estado en la protección de manifestaciones y el mantenimiento del orden en grandes concentraciones humanas, cuando sean requeridos para ello.',
      'Cooperar en la resolución de los conflictos privados, cuando sean requeridos para ello.',
      'Instruir los atestados policiales en caso de siniestros laborales, cualquiera que sea su resultado y de la investigación de los delitos de riesgo en materia de seguridad e higiene en el trabajo, dentro del término municipal, dando traslado de los mismos a la autoridad competente, sea judicial o laboral, colaborando con otras Fuerzas y Cuerpos de Seguridad del Estado mediante los oportunos protocolos de actuación y acuerdos de colaboración suscritos al efecto.',
      'Actuar con las Fuerzas y Cuerpos de Seguridad del Estado en el cumplimiento de las resoluciones judiciales dictadas en materia de violencia de género, protección del menor, delitos de odio y otras de carácter social.',
      'Además de las funciones establecidas en los puntos anteriores, en virtud de convenio entre la Comunidad de Madrid y los ayuntamientos, los Cuerpos de policía local podrán ejercer en su término municipal las siguientes funciones: 1º Velar por el cumplimiento de las disposiciones y órdenes singulares dictadas por los órganos administrativos de la Comunidad de Madrid. 2º Inspeccionar las actividades sometidas a la ordenación o disciplina de la Comunidad de Madrid, denunciando toda actividad ilícita. 3º Adoptar las medidas necesarias en orden a garantizar la ejecución forzosa de los actos o disposiciones de la Comunidad de Madrid. 4º Ejercer en su término municipal la vigilancia y protección de personas, órganos, edificios, establecimientos y dependencias de la Comunidad Autónoma y de sus entes instrumentales.',
      ],
    'Tareas': [
      {
       'TipoTarea': 'Derivada de Funciones Específicas',
       'Resultado': 'Conseguir Fines y Objetivos',
       'TiempoDedic': '100%'
      }],
    'ConocExper': {
    'FormReglada': {
        'Nivel': 'C1',
        'Titulo': 'Bachiller, Formación Profesional 2º grado',
      }
    },
    'FormCompl': [
      'Realización de curso de acceso a la categoría'
    ],
    'Idiomas': {
        'Idioma': '',
        'Nivel': '',
      },
    'ExperPrevia': {
        'Actividad': '',
        'Tiempo': ''
      },
    'PeriodAdapt': '1 mes',
    'Habilidades': [
      ' Gest. Equipos',
      'Liderazgo',
    ],
    'Certificaciones': ['Carnet BTP'],
    'ResponsAut': {
      'DependFuncional': 'Oficial Policía Local',
      'ResponsabilidadMando': 'Sí',
      'Subordinados': 'No',
      'MagnitDecisiones': 'Las que se adoptan en momentos puntuales en las que no existen normas previas preestablecidas para conseguir los objetivos.',
      'GuiaOrientRecibidas': [
        'Las directrices marcadas por el superior jerárquico.',
        'Legislación vigente.'
      ],
      'GradoSuperv': [
        'Por el Superior inmediato.',
        'Por la Autoridad Judicial'
      ]
    },
    'RelacFuncionales': {
      'RelInternas': 'Relaciones recíprocas entre Dependencias Municipales para el cumplimiento de sus fines.',
      'RelExternas': 'Relación del puesto con los ciudadanos y otras con diversos organismos.'
    },
    'Condiciones': {
      'Dedicacion': '',
      'Dificultad': '',
      'Responsabilidad': '',
      'Nocturnidad': 'Sí',
      'Turnicidad': 'Sí',
      'PeligrosidadPenosidad': 'Sí'
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