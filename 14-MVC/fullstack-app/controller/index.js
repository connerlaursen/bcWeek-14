const router = require("express").Router();
const authRoutes = require('./api/auth.js');
const userRoutes = require('./api/users.js');
const ungatedRoutes = require('./api/ungated.js');

router.use('/', ungatedRoutes);
router.use('/auth', authRoutes);
router.use("/users", userRoutes);


module.exports = router;