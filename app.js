const http = require('http');
const express = require('express');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dick', adminRoutes);
app.use(shopRoutes);
app.get('/', (req,res, next) => {
  console.log('middleware, dude')
  return res.send('<h1>dickhead</h1>')
});

const server = http.createServer(app);
server.listen(4200);