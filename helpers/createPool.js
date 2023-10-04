const mariadb = require('mariadb')
require('dotenv').config()

let pool;
module.exports = {
        getPool: function () {
        if (!pool) {
        const config = {
            connectionLimit : 10,
            host: process.env.host,
            port: process.env.port,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database
        };
        pool = mariadb.createPool(config);
        }
        return pool;   
    }     
};