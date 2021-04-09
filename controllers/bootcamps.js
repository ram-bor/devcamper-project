const Bootcamp = require('../models/Bootcamp')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.json(bootcamps)
    // res.status(200).json({
    //   success: true,
    //   data: bootcamps
    // })
  } catch (error) {
    res.status(400).json({
      success: false
    })
    console.log("error", error)

  }
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    // check for bootcamp and if its formatted (always return the first response when you have two responses in the try block because you will get a 'headers has already been returned')
    if (!bootcamp) {
      // checks for correct formatted id but non-bootcamp
      return res.status(400).json({ success: false })

    }
    res.status(200).json({ success: true, data: bootcamp })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

// @desc    Create new bootcamp
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp
    })

  } catch (error) {
    res.status(400).json({
      success: false
    })
    console.log("error", error)
  }
};

// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp: ${req.params.id}` });
};

// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp: ${req.params.id}` });
};
