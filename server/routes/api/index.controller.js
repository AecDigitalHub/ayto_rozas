const express = require('express');
const router  = express.Router();
const authRoutes = require('./authentication.controller');
const positionRoutes = require('./position.controller');
const areaRoutes = require('./area.controller');
const complementoRoutes = require('./complemento.controller');
const employeesRoutes = require('./puestos.controller');
const puestosRoutes = require('./puestos.controller');

router.use('/', authRoutes);
router.use('/positions', positionRoutes);
router.use('/area', areaRoutes);
router.use('/complements', complementoRoutes);
router.use('/employees', employeesRoutes);
router.use('/puestos', puestosRoutes);


module.exports = router;