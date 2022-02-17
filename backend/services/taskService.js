const Joi = require('joi');

const taskModel = require('../models/taskModel');

const taskNameSchema = Joi.string().required();

const create = async (name) => {
  const nameIsValid = taskNameSchema.validate({ name });

  if (!nameIsValid) return false;

  const id = await taskModel.create(name);
  return id;
};

module.exports = {
  create,
};
