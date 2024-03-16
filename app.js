const express=require('express');
const morgan = require('morgan');
const app=new express();
const studentRoute=require('./routes/studentroute')
const db=require('./mongodb');
app.use(morgan('dev'));
app.use('/api',studentRoute);

app.listen(3000,()=>{console.log("listening to port 3000");});
