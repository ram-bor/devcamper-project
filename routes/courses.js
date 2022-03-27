const express = require('express');
const router = express.Router({ mergeParams: true });

// Import controller methods by assigning to variables pointing to correct file path
const {
    getCourses,
    getCourse
} = require('../controllers/courses');


router.route('/').get(getCourses)
router.route('/:id').get(getCourse)

//Routes to particular paths (i.e. ID)

module.exports = router;
