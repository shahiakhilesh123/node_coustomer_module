// Load required modules
const express = require('express');
const mysql = require('mysql');

// Create an instance of Express
const app = express();

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'db',  // The name of the MySQL service in docker-compose.yml
  user: 'node_root',
  password: 'root',
  database: 'node_template'
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World! Node.js and MySQL are running.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
