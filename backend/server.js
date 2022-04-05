const app = require('./app');

const database = require('./config/database');

const dotenv = require('dotenv');

// handel uncaught exception
process.on('uncaughtException', err => {
    console.log(`Error ${err.message}`);
    console.log('Shutting down server due to uncaught exception');
    process.exit(1);
})
// setting config file
dotenv.config({path: 'backend/config/config.env'});

// connect to db
database.connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Port running in ${process.env.PORT}`);
});

//handle unhandled promise rejection
process.on('unhandledRejection', err => {
    console.log(`Error ${err.message}`);
    console.log('Shutting Down Server due to unhandeled promise rejection');
    server.close(() => {
        process.exit(1);
    })
})