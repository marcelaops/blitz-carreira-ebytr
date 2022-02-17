const connection = require('./connection');

const create = async (name) => {
  const conn = await connection();
  const { insertedId: _id } = await conn.collection('tasks').insertOne({ name });

  return { _id };
};

module.exports = {
  create,
};
