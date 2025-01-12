const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const db = new sqlite3.Database('./app.db');


require('dotenv').config();

const defaultAdminEmail = process.env.DEFAULT_ADMIN_EMAIL || 'dmurangiri92@gmail.com';
const defaultAdminPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'admin123';

db.serialize(() => {
  // Create Admins table
  db.run(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT
    )
  `);

  // Create Members table
  db.run(`
    CREATE TABLE IF NOT EXISTS members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      password_changed BOOLEAN DEFAULT 0
    )
  `);

  // Check if the default admin exists
  db.get('SELECT * FROM admins WHERE email = ?', [defaultAdminEmail], (err, row) => {
    if (err) {
      console.error('Error checking for default admin:', err.message);
    } else if (!row) {
      // Hash the default admin password
      const hashedPassword = bcrypt.hashSync(defaultAdminPassword, 10);

      // Insert the default admin into the database
      db.run(
        'INSERT INTO admins (email, password) VALUES (?, ?)',
        [defaultAdminEmail, hashedPassword],
        (err) => {
          if (err) {
            console.error('Error inserting default admin:', err.message);
          } else {
            console.log(`Default admin created: ${defaultAdminEmail}`);
          }
        }
      );
    } else {
      console.log('Default admin already exists');
    }
  });
});

module.exports = db;
