const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
const users = require('./routes/users')
const connectDB = require('./db/db');
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users',users);

app.listen(4000,()=>console.log('Servidor corriendo'));
