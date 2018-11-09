const express = require("express");
const router = express.Router();
// const loggedIn = require("../../utils/isAuthenticated");
// const positionSkill = require("../../models/positionsSkills");
const complemento = require("../../models/complemento_model");
const _ = require("lodash");

router.get("/", (req, res, next) => {
  complemento.find({}).then(complementos => {
    return res.status(200).json({ complementos });
  });
});

router.get("/:complemento", (req, res, next) => {
  complemento.findById(req.params.complemento).then(complemento => {
    return res.status(200).json({ complemento });
  });
});

module.exports = router;
