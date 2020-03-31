const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');

const roomRoutes = require('./routes/room.routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api', roomRoutes);

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../build/index.html'));
});
app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;


db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));


app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port: `, config.DB);
});
