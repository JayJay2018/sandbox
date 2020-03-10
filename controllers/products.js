 const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // return res.sendFile(path.join(__dirname, '../', 'views', 'add-item.html'))
  return res.status(200).render('add-product.ejs', {
    title: 'Admin Page',
    path: '/admin/add-product'
  });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  console.log(product);
  product.save();
  return res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      title: 'Shop',
      path: '/'
      // hasProducts: products.length > 0,
      // activeShop: true,
      // productCSS: true
    });
  });
};