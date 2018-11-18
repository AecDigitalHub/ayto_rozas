const express = require("express");
const router = express.Router();
// const loggedIn = require("../../utils/isAuthenticated");
// const positionSkill = require("../../models/positionsSkills");
const puesto = require("../../models/puesto_model");
const _ = require('lodash');


router.get('/', (req, res, next) => {
  puesto.find({}).then(jobs => {
    return res.status(200).json({jobs});
  })
})

router.post('/addPuesto', (req, res, next) => {
  const newPuesto = new puesto({
    Position: req.body.Position,
    CodDPT: req.body.CodDPT,
    CodEmpleado: req.body.CodEmpleado,
    NombreEmpleado: req.body.NombreEmpleado,
    Situacion: req.body.Situacion
  });
  newPuesto.save((err) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (newPuesto.errors) {
      return res.status(400).json(newPuesto);
    };
    dpt.findById(newPuesto.Position).then(pos => {
      pos.Puestos.push(newPuesto);
    });
    return res.status(200).json(newPuesto);
  });
  
    // dpt
    //   .findByIdAndUpdate(req.params.id,{ 'RelacFuncionales.RelExternas': pos.RelacFuncionales.RelExternas },{ new: true })
    //   .then(position => res.status(200).json())
    //   .catch(err => console.log(err));
  });


module.exports = router;