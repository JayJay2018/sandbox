const express = require('express');

const app = express();

const adminController = require('./routes/admin');
const shopController = require('./routes/shop');
const errorController = require('./controllers/error')
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminController);

app.use(shopController);

app.use(errorController.get404)

app.listen(4200);