const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to DB');
  })
  .catch((err) => {
    console.log(err.message);
  });

// Creating a new schema for mongoose
// schema -> model -> model then used to interact with database
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'], // Schema options. Different for different types
    unique: [true, 'A tour with same name already exists'], // cannot have 2 same names
  },
  rating: {
    type: Number,
    default: 4.5, // Default rating
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'], // Error message delcared in the form of list
  },
});
const Tour = mongoose.model('Tour', tourSchema); // Creating a model with schema. Naming convention of capital T

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
