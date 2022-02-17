/* eslint-disable mocha/no-mocha-arrows */

// Para escrever esses testes foram usados como referência o conteúdo do dia 27.4 da Trybe e o projeto Store Manager, também da Trybe.

const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mongoMockConnection');
const TasksModel = require('../models/taskModel');
// const connection = require('../models/connection');

describe('Será validado que é possível criar uma tarefa com sucesso', () => {
  let connectionMock;
  const mockTask = { name: 'task description' };

  // Mockando a conexão sem subir nada para o MongoDb -> características reais porem sem a conexão real.
  before(async () => {
    connectionMock = await getConnection();

    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db('TaskManager').collection('tasks').drop();

    MongoClient.connect.restore();
  });

  it('Ao adicionar a tarefa o retorno é um objeto', async () => {
    const response = await TasksModel.create(mockTask);
    
    expect(response).to.be.a('object');
  });

  it('O objeto retornado possui o "_id" da tarefa inserida', async () => {
    const response = await TasksModel.create(mockTask);
    
    expect(response).to.have.a.property('_id');
  });
});
