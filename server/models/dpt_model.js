const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Puesto = require('./puesto_model').schema



const DPTSchema = new Schema({
  CodigoDPT: String,
  FichaDPT: {
    DenomPuesto: String,
    OrgDirectivo: String,
    Concejalia: { type: String, enum: ['Seguridad y Orden Público - Seguridad Ciudadana', 'Conservación y Medio Ambiente','conc2', 'conc3...', ''], default: ''},
    Area: { type: String, enum: ['Seguridad Ciudadana, Protección Civil-Samer, Movilidad y Distrito Norte', 'Servicios a la Ciudad','Area2', '...',''], default: ''},
    CodArea: String,
    Unidad: { type: String, enum: ['Policía Local (Servicios Operativos)', 'Espacios a la Ciudad', 'Unidad2', 'Unidad3', ''], default: ''},
    Escala: { type: String, enum: ['Escala1', '(AE) Administración Especial','Escala2', 'Escala3', ''], default: ''},
    Subescala: { type: String, enum: ['Básica', 'Técnico','Subescala2', 'Subescala3', ''], default: ''},
    Categoria: { type: String, enum: ['Superior', 'categoria2', 'categoria3', ''], default: ''},
    Grupo: { type: String, enum: ['A1', 'A2', 'B', 'C1', 'C2', 'E'], default: ''},
    Colectivo: { type: String, enum: ['(F) Funcionario', '(L) Laboral', ''], default: ''},
    FormaProvision: { type: String, enum: ['(LD) Libre Designación', '(C) Concurso', 'forma3', ''], default: ''},
    Tipo: { type: String, enum: ['(NS) No Singularizado', 'tipo2', 'tipo3', ''], default: ''},
    NumPuestosHomog: String
  },
  Mision: String,
  Funciones: [String],
  Tareas: [
    {
     TipoTarea: String,
     Resultado: String,
     TiempoDedic: String
    }],
  ConocExper: {
    FormReglada: {
      Nivel: { type: String, enum: ['A2', 'C1', 'nivel3', ''], default: ''},
      Titulo: String
    },
    FormCompl: [String],
    Idiomas: {
      Idioma: String,
      Nivel: { type: String, enum: ['Bajo', 'Intermedio', 'Alto', ''], default: ''}
    },
    ExperPrevia: {
      Actividad: String,
      Tiempo: String
    },
    PeriodAdapt: String,
    Habilidades: [String],
    Certificaciones: [String],
  },
  ResponsAut: {
    DependFuncional: String,
    ResponsabilidadMando: {type: String, enum: ['Sí', 'No', ''], default: ''},
    Subordinados: String,
    MagnitDecisiones: String,
    GuiaOrientRecibidas: [String],
    GradoSuperv: [String]
  },
  RelacFuncionales: {
    RelInternas: [String],
    RelExternas: [String]
  },
  Condiciones: {
    Dedicacion: { type: String, enum: ['Sí', 'No', ''], default: ''},
    Dificultad: { type: String, enum: ['Sí', 'No', ''], default: ''},
    Responsabilidad: { type: String, enum: ['Sí', 'No', ''], default: ''},
    Nocturnidad: { type: String, enum: ['Sí', 'No', ''], default: ''},
    Turnicidad: { type: String, enum: ['Sí', 'No', ''], default: ''},
    PeligrosidadPenosidad: { type: String, enum: ['Sí', 'No', ''], default: ''}
  },
  Puestos: [{type: Schema.Types.ObjectId, ref: 'Puesto'}],
  Vacantes: [{type: Schema.Types.ObjectId, ref: 'Puesto'}]
  });
 
const DPT = mongoose.model('DPT', DPTSchema);
module.exports = DPT;