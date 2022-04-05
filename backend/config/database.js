const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod = null;

const connectDatabase = async () => {

    try {
         let dbUrl = process.env.DB_LOCAL_URI;
        if (process.env.NODE_ENV === 'test') {
            mongod = await MongoMemoryServer.create();
            dbUrl = mongod.getUri();
        }

        await mongoose.connect(dbUrl).then(con => {
            console.log(`mongodb connected on ${con.connection.host}`);
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
   
}

const disconnectDatabase = async () => {
  try {
    await mongoose.connection.close();
    if (mongod) {
      await mongod.stop();
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = {connectDatabase, disconnectDatabase};