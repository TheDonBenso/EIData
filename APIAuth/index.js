const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');

//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const budgetSheetRoute = require('../routes/BudgetPosts');
dotenv.config();


//connect to DB

mongoose.connect(process.env.DB_CONNECT,
                {useNewUrlParser: true },
                ()=> console.log('connected to db')
            );

//middleware
app.use(express.json());
app.use(helmet());

//Route Middleware
app.use('/api/user', authRoute);   
app.use('/api/posts', postRoute);

app.listen(3001, ()=> console.log('server up and running'));