const constructorMethod = app => {
  app.get('/', (req, res) => {
    res.render('portfolio/homepage', {products: [
      {
        id: 1,
        name: "Wonderball",
        img: "/public/img/wonderball.jpg",
        description: "It was chocolate",
        details: "It was milk chocolate",
      },
      {
        id: 2,
        name: "Notball",
        img: "/public/img/notball.jpg",
        description: "It was not chocolate",
        details: "It was not milk chocolate",
      }
    ]});
  }); 

  app.use('*', (req,res) => {
    res.status(404).send('Not found');
  });
};

module.exports = constructorMethod;
