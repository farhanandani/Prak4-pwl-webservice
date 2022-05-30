const mySql = require('mysql');

const connection = mySql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'N76k2sI9H0',
    password: 'rvx4cHXMd9',
    database: 'N76k2sI9H0',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = connection;