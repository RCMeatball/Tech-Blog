const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blgoRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;