const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const DB = process.env.DATABASE;
const port = process.env.PORT;

mongoose
  .connect(DB)
  .then(() => console.log('DB connection Successfully'))
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`app is listen in port ${port}`);
});
