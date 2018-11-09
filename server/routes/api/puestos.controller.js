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


// router.delete('/delete/:position', (req, res, next))


module.exports = router;