const express = require('express');
const router = express.Router();
const db = require('../database/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the secret key for JWT
const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key'; // Set this in your .env file

// Admin Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM admins WHERE email = ?', [email], async (err, admin) => {
    if (err) return res.status(500).send('Server error');
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ id: admin.id, role: 'admin' }, SECRET_KEY);
    res.json({ token });
  });
});

// Add Member
router.post('/members', (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  db.run(
    'INSERT INTO members (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashedPassword],
    function (err) {
      if (err) return res.status(400).send('Member already exists');
      res.status(201).send('Member added');
    }
  );
});

// Member Login
router.post('/members/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM members WHERE email = ?', [email], async (err, member) => {
    if (err) return res.status(500).send('Server error');
    if (!member || !(await bcrypt.compare(password, member.password))) {
      return res.status(401).send('Invalid credentials');
    }

    if (!member.password_changed) {
      return res.json({
        message: 'Change password required',
        forcePasswordChange: true,
      });
    }

    const token = jwt.sign({ id: member.id, role: 'member' }, SECRET_KEY);
    res.json({ token });
  });
});

// Change Password
router.put('/members/change-password', (req, res) => {
  const { email, newPassword } = req.body;
  const hashedPassword = bcrypt.hashSync(newPassword, 10);

  db.run(
    'UPDATE members SET password = ?, password_changed = 1 WHERE email = ?',
    [hashedPassword, email],
    function (err) {
      if (err) return res.status(500).send('Server error');
      if (this.changes === 0) return res.status(404).send('Member not found');
      res.send('Password updated');
    }
  );
});

module.exports = router;
