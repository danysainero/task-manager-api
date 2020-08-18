const mainRouter = require('express').Router();



mainRouter.use('/task-manager', require('./board.routes'));

module.exports = mainRouter;