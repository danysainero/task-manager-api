const boardSchema = require("../../models/board");


class BoardsRepository {
  constructor() {}

  async getAllBoards() {
    try {
      const allBoards = await boardSchema
        .find({})
      
      return allBoards;
    } catch (err) {
      return err.message;
    }
  }

}

module.exports = new BoardsRepository();
