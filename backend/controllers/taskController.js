const taskService = require('../services/taskService');

const CREATED = 201;

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const task = await taskService.create(name);
    
    return res.status(CREATED).json(task, { message: 'Tarefa criada com sucesso' });
  } catch (error) {
    console.log(`POST - create task -> ${error}`);
    return next(error);
  }
};

module.exports = { 
  create, 
};