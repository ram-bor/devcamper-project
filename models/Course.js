const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CourseSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add a course title']
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Please add a description']
    },
    weeks: {
        type: String,
        trim: true,
        required: [true, 'Please add number of weeks']
    },
    tuition: {
        type: Number,
        required: [true, 'Please add a tuition cost']
    },
    minimumSkill: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: [true, 'Please add a minimum skill']
    },
    scholarshipAvailable: {
        type: boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },



})