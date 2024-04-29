//Added dotenv + file
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const app = express();
const cors = require('cors');  

//Changed express pointing to "public" -folder
app.use(express.json('public'));
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'DELETE'], 
}));

//COnnection pool values are now found in dotenv-file (for Render),
//added ssl for Render
const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_UNAME,
  password: process.env.PG_PW,
  ssl: true
});


const PORT = process.env.PORT || 3001;


app.post('/SignIn', async (req, res) => {
  const { email, pw } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]); // käyttäjän haku
    if (result.rows.length === 0) {
    return res.status(401).json({ success: false, message: 'Wrong password or username' });
    }

    const user = result.rows[0];
    const Pwok = await bcrypt.compare(pw, user.pw);
    if (Pwok) {
      return res.json({ success: true, message: 'Signed in' });
    } else {
      return res.status(401).json({ success: false, message: 'Wrong password or username' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    return res.status(500).json({ success: false, message: 'Error' });
  }
});



app.post('/SignUp', async (req, res) => {  // käyttäjän lisäys
  const {email, pw, fname, lname, username } = req.body;
  try {
    const hashedPw = await bcrypt.hash(pw, 10); // hash
    await pool.query('INSERT INTO users (email, pw, fname, lname, username) VALUES ($1, $2, $3, $4, $5)', [email, hashedPw, fname, lname, username]);
    res.json({ success: true, message: 'User created' });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ success: false, message: 'Error' });
  }
});


app.delete('/DeleteAccount', async (req, res) => {
  const { email, pw } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);  // haetaan käyttäjä
    if (result.rows.length === 0) {
      
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const user = result.rows[0];
    const Pwok = await bcrypt.compare(pw, user.pw);
    if (!Pwok) {
        return res.status(401).json({ success: false, message: 'Wrong passworrd' });
    }

   
    const deleteResult = await pool.query('DELETE FROM users WHERE email = $1', [email]);  // käyttäjän poisto
    if (deleteResult.rowCount > 0) {
      res.json({ success: true, message: 'User deleted successfully' });
    } else {
      res.status(500).json({ success: false, message: 'Error deleting user' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ success: false, message: 'Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});