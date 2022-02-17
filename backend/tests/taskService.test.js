/* eslint-disable mocha/no-mocha-arrows */
const { expect } = require('chai');
const sinon = require('sinon');

const TaskModel = require('../models/taskModel');
const TaskService = require('../services/taskService');

describe('Inserindo uma tarefa na lista', () => {
  const payloadTask = { name: 'task description' };

  before(() => {
    const ID_EXAMPLE = '604cb554311d68f491ba5781';

    sinon.stub(TaskModel, 'create').resolves({ _id: ID_EXAMPLE });
  });

  after(() => { TaskModel.create.restore(); });

  describe('A tarefa é inserida com sucesso', () => {
    it('Ao adicionar a tarefa o retorno é um objeto', async () => {
      const response = await TaskService.create(payloadTask);
      
      expect(response).to.be.a('object');
    });
  
    it('O objeto retornado possui o "_id" da tarefa inserida', async () => {
      const response = await TaskService.create(payloadTask);
      
      expect(response).to.have.a.property('_id');
    });
  });
});