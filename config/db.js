import mysql from 'mysql2';
import { DB_HOST,DB_USER,DB_PASSWORD,DB_NAME } from './config.js';

const connection = mysql.createConnection({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_NAME
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Database Connected');
});

export default connection;
