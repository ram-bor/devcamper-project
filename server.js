// import modules
const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Route files
const bootcamps = require('./routes/bootcamps');


// Load env vars
dotenv.config({ path: './config/config.env' });

// Middleware (always call 'next' as a param so that it knows to move on to the next middleware in cycle)
const logger = (req, res, next) => {
  req.hello = 'hello world';
  console.log('middleware ran')
  next()
}

app.use(logger)



// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// Set up env port and if not available it will listen on 8000
const PORT = process.env.PORT || 8000;

// Call server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
