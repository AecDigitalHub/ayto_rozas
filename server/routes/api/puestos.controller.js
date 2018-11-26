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
      if (newPuesto.NombreEmpleado == "VACANTE" || newPuesto.NombreEmpleado == "Vacante") {
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
      if (pues.NombreEmpleado == 'Vacante' || pues.NombreEmpleado == 'VACANTE') {
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
      DenomPuesto,
      CodEmpleado,
      NombreEmpleado,
      Situacion
    } = req.body;
    let editedPuesto = {
      Position: Position,
      CodDPT: CodDPT,
      DenomPuesto: DenomPuesto,
      CodEmpleado: CodEmpleado,
      NombreEmpleado: NombreEmpleado,
      Situacion: Situacion
    }
    editedPuesto = _.pickBy(editedPuesto);
    console.log(editedPuesto);

    puesto.findByIdAndUpdate(
    req.params.id,
    editedPuesto,
    { new: true }
  )
//   dpt.findById(editedPuesto.Position).then(pos => {
//     if (editedPuesto.NombreEmpleado == "VACANTE" || editedPuesto.NombreEmpleado == "Vacante") {
//       actual = pos.Vacantes.push(editedPuesto._id)
//         dpt
//           .findByIdAndUpdate(
//             editedPuesto.Position,
//             { Vacantes: pos.Vacantes  },
//             { new: true }
//           )
//           .then(position => {
//             return res.status(200).json(position)
//         });
//         } else {
//       actual = pos.Vacantes.pull(editedPuesto._id);
//       dpt
//         .findByIdAndUpdate(
//           editedPuesto.Position,
//           { Vacantes: pos.Vacantes },
//           { new: true }
//         )
//         .then(position => {
//           return res.status(200).json(position)
//   });
// }
//   })
  .then(puesto => res.status(200).json(puesto))
  .catch(err => console.log(err));


});


module.exports = router;
