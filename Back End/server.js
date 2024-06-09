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

app.post('/user/login', async (req, res) => {
  const { loginName, password } = req.body;
  try {
    let result = await db.query('select id, user_name, user_password from users where user_name = $1 and user_password = $2', [loginName, password]);
    if (result.rowCount == 0) {
      throw new Error('User does not exist');
    }
    res.status(200).send(result.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('<h1>Login Failed</h1>');
  }
})

// This is used to ADD item to the cart table

app.post('/user/cart/add', async (req, res) => {
  const { proDesc, userId, ItemCount } = req.body;
  try {
    let result = await db.query('select pro_id, pro_price from products where pro_desc = $1', [proDesc]);
    if (result.rowCount === 0) {
      throw new Error('Data not Found')
    }
    else {
      const proId = result.rows[0].pro_id;
      const price = result.rows[0].pro_price * ItemCount;
      let PushResult = await db.query('insert into cart(pro_id, user_id, pro_qty, pro_price) values($1, $2, $3, $4)', [proId, userId, ItemCount, price]);
      if (result.rowCount === 0) {
        throw new Error('Data not Pushed to db');
      }
      res.status(200).send('Data Pushed')
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('data not pushed');
  }
})

// THIS IS GET REQ FOR FETCHING THE DATA FROM THE CART TABLE - checkout.js 21

app.get('/user/cartitem', async (req, res) => {
  const { userId } = req.query; // Use query parameters instead of body
  try {
    const result = await db.query('select pro_id, pro_qty from cart where user_id = $1', [userId]);
    res.status(200).send(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
})

// this is used to DELETE item, from the cart

app.delete('/user/cartitem/delete', async (req, res) => {
  const { userId, itemId } = req.query; // Changed from req.body to req.query
  console.log(req.query);

  if (!userId || !itemId) {
    return res.status(400).json({ error: 'userId and itemId are required' });
  }

  try {
    const result = await db.query('DELETE FROM cart WHERE pro_id = $1 AND user_id = $2', [itemId, userId]);
    
    if (result.rowCount > 0) {
      console.log(result);
      res.status(200).json({ message: 'Item removed from cart' });
    } else {
      res.status(404).json({ error: 'Item not found in cart' });
    }
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ error: 'An error occurred while removing the item from the cart' });
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
