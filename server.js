// import modules
const express = require('express');
const dotenv = require('dotenv');
const app = express();
// const logger = require('./middleware/logger')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');


// call middleware module (custom made by yours truly)
// app.use(logger)

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Body parser (included with express, no need to download it)
app.use(express.json());


// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

app.use(errorHandler) // has to be after routers since that is where it is referenced

// Set up env port and if not available it will listen on 8000
const PORT = process.env.PORT || 8000;

// Call server
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);


// 
// Handle unhandled promise rejections aka GLOBAL HANDLER, you could also just do a TRY -> CATCH in mongoose.connect
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error please fix this: ${err.message}`.red.bold)
  // Close server and exit process
  server.close(() => process.exit(1))
})

