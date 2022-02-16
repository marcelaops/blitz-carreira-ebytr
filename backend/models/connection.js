require('dotenv').config();
const mongodb = require('mongodb').MongoClient;

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/TaskManager`;
const DB_NAME = 'TaskManager';

module.exports = () => mongodb.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
