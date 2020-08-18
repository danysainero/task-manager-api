const BoardsController = require("../resources/boards/boards-controller");
const boardsRouter = require("express").Router();
  
boardsRouter.get('/boards',  BoardsController.getAllBoards);

module.exports = boardsRouter;