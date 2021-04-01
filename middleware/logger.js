// @desc    Logs request to console

// Middleware (always call 'next' as a param so that it knows to move on to the next middleware in cycle)
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')} ${req.originalUrl}`)
    next()
}

module.exports = logger;