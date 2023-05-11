const express = require('express');
const cors = require('cors');
const { appVars } = require('./config/env.config');
const { db } = require('./models/index');
const { router } = require('./routes/driver');

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use('/driver', router);

app.listen(appVars.port, async () => {
  console.log('Server is running on port: ', appVars.port);
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await db.sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
