const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'study_schedule_db'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Połączono z bazą danych.");
});

module.exports = connection;