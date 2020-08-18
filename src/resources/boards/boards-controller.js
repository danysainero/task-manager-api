const BoardsService = require('./boards-service')

class BoardsController {
  constructor() {}

  async getAllBoards(req, res) {
    try {
      const boards = await BoardsService.getAllBoards();
      /* const boards =  [{
        id: '01',
        boardTitle: 'Título1',
        boardDescription: 'Descripción bla blaaaabla blabla blaaaa',
        boardCreatedDate: '01/01/2020',
        boardUser: 'User',
        boardCards: [{
          id: '001',
          cardTitle: 'Card Title',
          cardUser: {
            userName: 'userName',
            userPass: 'userPass',
            userRole: 'admin',
          },
        }],
      },
      {
        id: '02',
        boardTitle: 'Título 2',
        boardDescription: '2 Descripción bla blaaaabla blabla blaaaa',
        boardCreatedDate: '02/02/2020',
        boardUser: 'User2',
        boardCards: [{
          id: '002',
          cardTitle: 'Card Title 2',
          cardUser: {
            userName: 'userName',
            userPass: 'userPass',
            userRole: 'admin',
          },
        }],
      }];
      return boards */
      res.status(200).send(boards)
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports = new BoardsController()
