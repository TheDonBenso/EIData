const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
dotenv.config();
//connect to DB

mongoose.connect('mongodb+srv://nodedemo:vU9svh0CK1FTpfMl@cluster0-sayow.mongodb.net/test?retryWrites=true&w=majority',
                {useNewUrlParser: true },
                ()=> console.log('connected to db')
            );

//middleware
app.use(express.json());


//Route Middleware
app.use('/api/user', authRoute);   
app.use('/api/posts', postRoute);

app.listen(3001, ()=> console.log('server up and running'));