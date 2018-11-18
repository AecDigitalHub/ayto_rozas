const express = require("express");
const router = express.Router();
const puesto = require("../../models/puesto_model");
const dpt = require("../../models/dpt_model");
const _ = require("lodash");

router.get("/", (req, res, next) => {
  puesto.find({}).then(jobs => {
    return res.status(200).json({ jobs });
  });
});

router.post("/addPuesto", (req, res, next) => {
  const newPuesto = new puesto({
    Position: req.body.Position,
    CodDPT: req.body.CodDPT,
    DenomPuesto: req.body.DenomPuesto,
    CodEmpleado: req.body.CodEmpleado,
    NombreEmpleado: req.body.NombreEmpleado,
    Situacion: req.body.Situacion
  });
  newPuesto.save(err => {
    if (err) {
      return res.status(500).json(err);
    }
    if (newPuesto.errors) {
      return res.status(400).json(newPuesto);
    }
    
    // return res.status(200).json(newPuesto);
    dpt.findById(newPuesto.Position).then(pos => {
      if(newPuesto.NombreEmpleado !== "VACANTE" || newPuesto.NombreEmpleado !== "Vacante"){
        pos.Puestos.push((newPuesto.id).toString());
        dpt
          .findByIdAndUpdate(
            newPuesto.Position,
            { Puestos: pos.Puestos },
            { new: true }
          )
          .then(position => {
            return res.status(200).json(position)
        });
           } else if (newPuesto.NombreEmpleado == "VACANTE" || newPuesto.NombreEmpleado == "Vacante") {
      pos.Puestos.push((newPuesto.id).toString());
      pos.Vacantes.push((newPuesto.id).toString());
        dpt
          .findByIdAndUpdate(
            newPuesto.Position,
            { Puestos: pos.Puestos },
            { new: true }
          )
          dpt
          .findByIdAndUpdate(
            newPuesto.Position,
            { Vacantes: pos.Vacantes },
            { new: true }
          )
          .then(position => {
            return res.status(200).json(position)
        });
        };
      });
    });
  });


module.exports = router;
