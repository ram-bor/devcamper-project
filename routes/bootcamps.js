const express = require('express');
const router = express.Router();

// Import controller methods by assigning to variables pointing to correct file path
const {
  getBootcamp,
  getBootcamps, // needs id
  createBootcamp,
  updateBootcamp, // needs id
  deleteBootcamp, // needs id
} = require('../controllers/bootcamps');

// Routes to root path
router.route('/').get(getBootcamps).post(createBootcamp);

//Routes to particular paths (i.e. ID)
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
