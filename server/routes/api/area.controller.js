const express = require("express");
const router = express.Router();
// const loggedIn = require("../../utils/isAuthenticated");
const puesto = require("../../models/puesto_model");
const dpt = require("../../models/dpt_model");
const _ = require("lodash");

router.get("/:area", (req, res, next) => {
  dpt.find({ 'FichaDPT.Area': req.params.area })
  .populate("Valoracion")
  .populate("Puestos")
  .then(positions => {
     return res.status(200).json({ positions });
  });
});

router.post("/:area/add/dpt", (req, res, next) => {
  const newDpt = new dpt({
    CodigoDPT: req.body.CodigoDPT,
    FichaDPT: {
      DenomPuesto: '',
      OrgDirectivo: '',
      Concejalia: '',
      Area: req.body.area,
      CodArea: '',
      Unidad: '',
      Escala: '',
      Subescala: '',
      Categoria: '',
      Grupo: '',
      Colectivo: '',
      FormaProvision: '',
      Tipo: '',
      NumPuestosHomog: ''
    },
    Mision: '',
    Funciones: [],
    Tareas: [
      {
       TipoTarea: '',
       Resultado: '',
       TiempoDedic: ''
      }],
    ConocExper: {
      FormReglada: {
        Nivel: '',
        Titulo: ''
      },
      FormCompl: [],
      Idiomas: [{
        Idioma: '',
        Nivel: ''
      }],
      ExperPrevia: {
        Actividad: '',
        Tiempo: ''
      },
      PeriodAdapt: '',
      Habilidades: [],
      Certificaciones: [],
    },
    ResponsAut: {
      DependFuncional: '',
      ResponsabilidadMando: '',
      Subordinados: '',
      MagnitDecisiones: '',
      GuiaOrientRecibidas: [],
      GradoSuperv: []
    },
    RelacFuncionales: {
      RelInternas: [],
      RelExternas: []
    },
    Condiciones: {
      Dedicacion: '',
      Dificultad: '',
      Responsabilidad: '',
      JornadaPartida: '',
      Turnicidad: '',
      PeligrosidadPenosidad: '' 
    },
    Puestos: [],
    Vacantes: [],
    Valoracion: []
  });
  dpt.findOne({'CodigoDPT': newDpt.CodigoDPT}).then(coincidence => {
    if (coincidence) {
      console.log ('CodigoDPT already exists...');
      return res.status(200).json({})
    } else {
      newDpt.save(err => {
        if (err) {
          return res.status(500).json(err);
        }
        if (newDpt.errors) {
          return res.status(400).json(newDpt);
        }
        return res.status(200).json(newDpt);
      });
    }
  })
});

module.exports = router;
