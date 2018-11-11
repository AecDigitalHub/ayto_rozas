const DPT = require('../models/dpt_model');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const dpts = [
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
        },
        'FormCompl': [
          'Realización de curso de acceso a la categoría'
        ],
        'Idiomas': [{
          'Idioma': '',
          'Nivel': '',
        },],
        'ExperPrevia': {
          'Actividad': '',
          'Tiempo': '',
        },
        'PeriodAdapt': '1 mes',
        'Habilidades': [
          ' Gest. Equipos',
          'Liderazgo',
        ],
        'Certificaciones': [
          'Carnet BTP'
        ],
      },
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