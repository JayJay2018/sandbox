exports.get404 = (req, res, next) => {
  return res.status(404).render('404.ejs', {
    title: '404 - Not found',
    path: '/404'
  })
}