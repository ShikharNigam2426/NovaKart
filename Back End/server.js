import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pg from 'pg';

const app = express();
const port = 2000;

app.use(bodyParser.json());
app.use(cors());

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'nova',
  password: 'hariharnagar',
  port: 5432,
});

db.connect();

app.get('/', (req, res) => {
  res.send('<h1>this is a heading</h1>');
});

app.post('/user/signup', async (req, res) => {
  const { fullName, password } = req.body;
  try {
    // Storing the user name and password in the users table in nova database
    let result = await db.query('INSERT INTO users(user_name, user_password) VALUES($1, $2) returning user_name', [fullName, password]);
    res.status(200).send('<h1>Sign up Done</h1>');
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error.message });
  }
});

app.post('/user/login', async(req, res) => {
  const {loginName, password} = req.body;
  console.log(req.body);
  try {
    let result = await db.query('select user_name, user_password from users where user_name = $1 and user_password = $2', [loginName, password]);
    if(result.rowCount == 0){
      throw new Error('User does not exist');
    }
    res.status(200).send('<h1>Login Done</h1>');
  } catch (error) {
    console.log(error.message);
    res.status(500).send('<h1>Login Failed</h1>');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
