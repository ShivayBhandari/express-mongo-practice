const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './.env' });

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

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
