// const http = require('http');
const express = require('express');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/admin', adminData.routes);

app.use(shopRoutes);

// app.get('/', (req,res, next) => {
//   // console.log('middleware, dude')
//   return res.redirect('/products');
// });

app.use((req, res, next) => {
  return res.status(404).render('404.ejs', {
    title: '404 - Not found'
  })
})

// const server = http.createServer(app);
app.listen(4200);