const express = require('express');
const router = express.Router({ mergeParams: true });

// Import controller methods by assigning to variables pointing to correct file path
const {
    getCourses
} = require('../controllers/courses');


router.route('/').get(getCourses)

//Routes to particular paths (i.e. ID)

module.exports = router;
