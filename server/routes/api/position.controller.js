const express = require("express");
const router = express.Router();
// const loggedIn = require("../../utils/isAuthenticated");
// const positionSkill = require("../../models/positionsSkills");
const dpt = require('../../models/dpt_model');
const puesto = require("../../models/puesto_model");
const vptcompls = require('../../models/vpt_complementos_model');
const vptretribs = require('../../models/vpt_retribucion_model');
const _ = require('lodash');


router.get('/', (req, res, next) => {
  dpt.find({}).populate('Puestos').populate('Vacantes').then(positions => {
    return res.status(200).json({positions});
  })
})

// router.get("/:id", (req, res, next) => {
//   dpt.findById(req.params.id).populate('Puestos').populate('Vacantes').then(position => {
//         return res.status(200).json( { position });
//         })
//       })

router.get("/:id", (req, res, next) => {
  dpt.findById(req.params.id).populate('Puestos').populate('Vacantes').then(position => {
    vptcompls.findOne({ CodDPT: position.CodigoDPT }).then(vpt => {
    vptretribs.findOne( { CodDPT:  position.CodigoDPT } ).then(retribucion => {
      return res.status(200).json( { position, vpt, retribucion });
    });    
        })
      })
    })

router.put("/edit/condiciones/:id", (req, res, next) => {
  console.log(req.body);
  const { Dedicacion, Dificultad, Responsabilidad, Nocturnidad, Turnicidad, PeligrosidadPenosidad } = req.body;
  let editedCondiciones = { Dedicacion: Dedicacion, Dificultad: Dificultad, Responsabilidad: Responsabilidad, Nocturnidad: Nocturnidad, Turnicidad: Turnicidad, PeligrosidadPenosidad: PeligrosidadPenosidad }
  editedCondiciones = _.pickBy(editedCondiciones);
  console.log(editedCondiciones);

  dpt.findByIdAndUpdate(req.params.id, {Condiciones: editedCondiciones}, {new: true})
  .then(position => res.status(200).json())
  .catch(err => console.log(err))
})

router.put("/edit/mision/:id", (req, res, next) => {
  console.log(req.body);
  const { Mision } = req.body;
  let editedMision = { Mision: Mision }
  editedMision = _.pickBy(editedMision);
  console.log(editedMision);

  dpt.findByIdAndUpdate(req.params.id, editedMision , {new: true})
  .then(position => res.status(200).json())
  .catch(err => console.log(err))
})


module.exports = router;
