/* eslint-disable mocha/no-mocha-arrows */
const { expect } = require('chai');
const sinon = require('sinon');

const TaskService = require('../services/taskService');
const TaskController = require('../controllers/taskController');

describe('Inserindo uma tarefa na lista', () => {
  const response = {};
  const request = {};

  before(() => {
    request.body = { name: 'task description' };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(TaskService, 'create').resolves(true);
  });

  after(() => {
    TaskService.create.restore();
  });
  describe('A tarefa é inserida com sucesso', () => {
    it('O status chamado é 201', async () => {
      await TaskController.create(request, response);

      expect(response.status.calledWith(201)); // método calledWith é do Sinon.
    });

    it('Aparece a mensagem json "Tarefa criada com sucesso"', async () => {
      await TaskController.create(request, response);

      expect(response.json.calledWith({ message: 'Tarefa criada com sucesso' }));
    });
  });
});