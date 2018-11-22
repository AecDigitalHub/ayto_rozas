const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const loggedIn = require("../../utils/isAuthenticated");
const vptcompls = require("../../models/vpt_complementos_model");
const _ = require("lodash");

router.get("/", (req, res, next) => {
  complemento.find({}).then(complementos => {
    return res.status(200).json({ complementos });
  });
});

router.get("/:id/complementodestino/:complemento", (req, res, next) => {
  console.log(req.params);
  vptcompls.findById(req.params.id).then(vpt => {
    console.log(vpt.Complementos.ComplDestino);
    vptcompls.find({ 'vpt.Complementos.ComplDestino._id': { $all: ['req.params.complemento'] }}).then(compl => {
    return res.status(200).json({compl});
  });
});
});

router.put("/complespecifico/add/subcomplemento/:id", (req, res, next)=> {
  const Subcomplemento = req.body;
  let SubcomplementotoAdd = Subcomplemento;
  console.log(SubcomplementotoAdd);

  vptcompls.findById(req.params.id).then(vpt => {
    mycom = vpt.Complementos.ComplEspecifico[0];
    mycom.Subcompl.unshift(SubcomplementotoAdd);
    vptcompls.findByIdAndUpdate(req.params.id, { 'Complementos.ComplEspecifico[0].Subcompl': mycom.Subcompl }, { new: true })
    .then(complemento => res.status(200).json())
    .catch(err => console.log(err))
  });
});

module.exports = router;

