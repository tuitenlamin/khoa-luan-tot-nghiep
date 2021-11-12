const express = require('express');
const path = require('path');
const {sequelize} = require('./models');
const app = express();
const {rootRouter} = require("./routers/index");
var cors = require('cors');
app.use(cors());
// cài đặt ứng dụng kiểu json
app.use(express.json());

// cài đặt static file
const publicPathDirectory = path.join(__dirname,"./public");
app.use("/public",express.static(publicPathDirectory));

// // dùng router

app.use('/api',rootRouter);

// ////listen event connect 
app.listen(5000, async()=>{
    console.log('App listening on http://localhost:5000');
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});
