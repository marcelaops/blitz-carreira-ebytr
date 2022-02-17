const taskService = require('../services/taskService');

const CREATED = 201;

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const task = await taskService.create(name);
    
    if (!task) return res.status(400).json({ message: 'dados inválidos' });
    return res.status(CREATED).json({ message: 'Tarefa criada com sucesso' });
  } catch (error) {
    console.log(`POST - create task -> ${error}`);
    return next(error);
  }
};

module.exports = { 
  create, 
};