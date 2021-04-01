// import modules
const express = require('express');
const dotenv = require('dotenv');
const app = express();
// const logger = require('./middleware/logger')
const morgan = require('morgan')

// Route files
const bootcamps = require('./routes/bootcamps');


// Load env vars
dotenv.config({ path: './config/config.env' });

// call middleware module (custom made by yours truly)
// app.use(logger)

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}



// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// Set up env port and if not available it will listen on 8000
const PORT = process.env.PORT || 8000;

// Call server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
