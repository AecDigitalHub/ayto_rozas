const express = require("express");
const router = express.Router();
// const loggedIn = require("../../utils/isAuthenticated");
const puesto = require("../../models/puesto_model");
const dpt = require("../../models/dpt_model");
const _ = require("lodash");

router.get("/:area", (req, res, next) => {
  dpt.find({ 'FichaDPT.Area': req.params.area }).then(positions => {
     return res.status(200).json({ positions });
  });
});

module.exports = router;
