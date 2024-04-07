const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// create connection to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@great13pass',
  database: 'crud_contact'
});

// connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// configure body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle POST requests to /place-order endpoint
app.post('/place-order', (req, res) => {
  const { customerName, email, phoneNumber, shoeType, cleaningType, instructions } = req.body;
  
  // insert new order into the orders table
  const sqlinsert = `INSERT INTO orders(customer_name, email, phone_number, shoe_type, cleaning_type, instructions) VALUES (?, ?, ?, ?, ?, ?)`;
  
  connection.query(sqlinsert, [customerName, email, phoneNumber, shoeType, cleaningType, instructions], (err, result) => {
    if (err) {
      console.error('Error placing order:', err);
      res.status(500).json({ message: 'Order placement failed!' });
    } else {
      console.log('Order placed successfully!');
      res.status(200).json({ message: 'Order placed successfully!' });
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
