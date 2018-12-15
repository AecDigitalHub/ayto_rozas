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
          dpt.findById(newPuesto.Position).then(pos => {
      if (newPuesto.NombreEmpleado == "VACANTE" || newPuesto.NombreEmpleado == "Vacante" || newPuesto.NombreEmpleado == "vacante") {
        pos.Puestos.push((newPuesto.id).toString());
        pos.Vacantes.push((newPuesto.id).toString());
          dpt
            .findByIdAndUpdate(
              newPuesto.Position,
              { Puestos: pos.Puestos, Vacantes: pos.Vacantes  },
              { new: true }
            )
            .then(position => {
              return res.status(200).json(position)
          });
          } else {
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
      }
      });
    });
  });

  router.put("/delete/:id", (req, res, next) => {
    const PuestoId = req.params.id;
    puesto.findById(req.params.id)
    .then(pues => {
      if (pues.NombreEmpleado == 'Vacante' || pues.NombreEmpleado == 'VACANTE' || pues.NombreEmpleado == "vacante") {
      dpt
      .findByIdAndUpdate(
        pues.Position,
        { $pullAll: { Vacantes: [PuestoId], Puestos: [PuestoId] }},
        { new: true},
        function(err, data) {}
      );
      puesto.
      findByIdAndRemove(PuestoId)
      .then(() => {
        console.log('Puesto Deleted!')
        return res.status(200).json()
      })
      .catch(err => next(err));
      } else {
        dpt
      .findByIdAndUpdate(
        pues.Position,
        { $pullAll: { Puestos: [PuestoId] }},
        { new: true},
        function(err, data) {}
      );
      puesto.
      findByIdAndRemove(PuestoId)
      .then(() => {
        console.log('Puesto Deleted!')
        return res.status(200).json()
      })
      .catch(err => next(err));
      };
    });
  });
  

  router.put("/edit/:id" , (req, res, next) => {
    const {
      Position,
      CodDPT,
      CodEmpleado,
      DenomPuesto,
      NombreEmpleado,
      Situacion
    } = req.body;
    let editedPuesto = {
      Position: Position,
      CodDPT: CodDPT,
      CodEmpleado: CodEmpleado,
      DenomPuesto: DenomPuesto,
      NombreEmpleado: NombreEmpleado,
      Situacion: Situacion
    }

  if (editedPuesto.NombreEmpleado == "VACANTE" || editedPuesto.NombreEmpleado == "Vacante" || editedPuesto.NombreEmpleado == "vacante") {
        dpt
          .findByIdAndUpdate(
            editedPuesto.Position,
            { $push: { Vacantes: req.params.id } },
            { new: true },
            function(err, data) {} 

          )
          puesto.findByIdAndUpdate(
            req.params.id,
            editedPuesto,
            { new: true }
          )
          .then(editedPuesto => res.status(200).json())
        }

      else if (editedPuesto.NombreEmpleado !== "VACANTE" || editedPuesto.NombreEmpleado !== "Vacante") {
      dpt
        .findByIdAndUpdate(
          editedPuesto.Position,
          { $pullAll: { Vacantes: [req.params.id] } },
          { new: true },
          function(err, data) {} 
        )
        puesto.findByIdAndUpdate(
          req.params.id,
          editedPuesto,
          { new: true }
        )
        .then(editedPuesto => res.status(200).json())
        }

});


module.exports = router;
