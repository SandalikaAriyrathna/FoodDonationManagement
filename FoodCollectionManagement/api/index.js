const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const FoodCollectionRoute = require('./routes/foodCollection');

const cors = require('cors');

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cors());

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use('/api/foodCollection', FoodCollectionRoute);

app.listen('5000', () => {
  console.log('Backend is running.');
});
