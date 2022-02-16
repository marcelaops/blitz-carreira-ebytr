/* eslint-disable mocha/no-mocha-arrows */
const { expect } = require('chai');

const TasksModel = {
  create: () => {},
};

describe('Insira uma nova tarefa no banco de dados', () => {
  const mockTask = { name: 'task description' };

  describe('Será validado que é possível criar uma tarefa com sucesso', () => {
    it('Ao adicionar a tarefa o retorno é um objeto', async () => {
      const response = await TasksModel.create(mockTask);
      
      expect(response).to.be.a('object');
    });

    it('O obajeto retornado possui o "_id" da tarefa inserida', async () => {
      const response = await TasksModel.create(mockTask);
      
      expect(response.to.have.a.property('_id'));
    });
  });
});
