const router = require('express').Router();

const routes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', routes);

module.exports = router;