const express = require('express');
const router = express.Router();

// Import controller methods by assigning to variables pointing to correct file path
const {
  getBootcamp,
  getBootcamps, // needs id
  createBootcamp,
  updateBootcamp, // needs id
  deleteBootcamp, // needs id
  getBootcampsInRadius //needs location and distance
} = require('../controllers/bootcamps');

// Include other resource routers
const courseRouter = require('./courses')

// Reroute into other resource routers
router.use('/:bootcampId/courses', courseRouter)


router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius)


// Routes to root path
router.route('/').get(getBootcamps).post(createBootcamp);

//Routes to particular paths (i.e. ID)
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
