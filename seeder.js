const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

//  Read JSON files
// const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))

// or just load JSON data.....
const bootcamps = require('./_data/bootcamps.json')
const courses = require('./_data/courses.json')
console.log(courses)

// Load env vars
dotenv.config({ path: './config/config.env' })

// Load models
const Bootcamp = require('./models/Bootcamp')
const Course = require('./models/Course')

//  Connect to db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

// Import into DB
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps)

        console.log('Data imported...'.green.inverse)
        process.exit()
    }
    catch (err) {

        console.log()
    }
}

// Delete Data
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany()

        console.log('Data destroyed...'.red.inverse)
        process.exit()
    }
    catch (err) {
        console.log()
    }
}

if (process.argv[2] === '-i') {
    importData()
} else if (process.argv[2] === '-d') {
    deleteData()
}
