const mongoose = require('mongoose'); // Requiring the mongoose
const dotenv = require('dotenv'); // Requiring the dotenv module to use the config.env files
const app = require('./app');

dotenv.config({ path: './config.env' }); // importing the content of config.env

const DB = process.env.DATABASE; // Declaring the DB variable
mongoose
  .connect(DB, {
    // Function to use mongodb with mongoose, first argument is the link
    useNewUrlParser: true, // Second argument are some objects that are helped for not generating warnings
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //It returns a promise
    console.log('connected to DB');
  })
  .catch((err) => {
    console.log(err.message);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
