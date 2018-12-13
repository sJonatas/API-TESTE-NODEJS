'use strict'

const express = require('express');

const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

//conecta ao banco
mongoose.connect('mongodb://sysuser1:sysuser1@ds040027.mlab.com:40027/teste-node-mongodb');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// carrega os modulos
const Produt = require('./models/product-model');

// carrega as rotas
const indexRoutes = require('./routes/index_routes');
const productRoutes = require('./routes/product_routes');

app.use('/', indexRoutes);
app.use('/products', productRoutes);

module.exports = app;
