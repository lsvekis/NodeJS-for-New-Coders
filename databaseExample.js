const sqlite3 = require('sqlite3').verbose();

// Create or open a database file named 'example.db'
let db = new sqlite3.Database('./example.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Run all database commands sequentially
db.serialize(() => {
  // Create a table
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER
  )`, (err) => {
    if (err) {
      return console.error("Error creating table:", err.message);
    }
    console.log('Table "users" is ready.');
  });

  // Insert a record
  db.run(`INSERT INTO users (name, age) VALUES (?, ?)`, ['Alice', 15], function(err) {
    if (err) {
      return console.error("Error inserting record:", err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  // Query the table
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("Current records in the 'users' table:");
    rows.forEach((row) => {
      console.log(row);
    });
  });
});

// Close the database connection
db.close((err) => {
  if (err) {
    return console.error("Error closing database:", err.message);
  }
  console.log('Database connection closed.');
});
