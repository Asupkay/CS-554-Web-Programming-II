const constructorMethod = app => {
  app.get('/', (req, res) => {
    res.render('portfolio/homepage');
  }); 

  app.use('*', (req,res) => {
    res.status(404).send('Not found');
  });
};

module.exports = constructorMethod;
