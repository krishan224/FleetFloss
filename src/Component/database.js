const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shoe-cleaning-website', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Define the message schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String
});

const Message = mongoose.model('Message', messageSchema);

// Handle form submission
app.post('/submit-form', (req, res) => {
  const message = new Message(req.body);
  message.save((err, message) => {
    if (err) {
      console.error('Error saving message: ', err);
      res.status(500).send('Internal server error');
    } else {
      console.log('Message saved successfully');
      res.status(200).send('Message sent successfully!');
    }
  });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
