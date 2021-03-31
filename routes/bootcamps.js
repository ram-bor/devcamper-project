const express = require('express');
const router = express.Router();

// Import controller methods by pointing to correct file path
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
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
