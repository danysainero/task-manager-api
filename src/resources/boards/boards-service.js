const BoardsRepository = require("./boards-repository");

class BoardsService {
  constructor() {}

  async getAllBoards() {
    try {
      return await BoardsRepository.getAllBoards();
    } catch (err) {
      return err.message;
    }
  }

}

module.exports = new BoardsService();
