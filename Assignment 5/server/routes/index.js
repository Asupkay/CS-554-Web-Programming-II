const peopleRoutes = require('./people');

const constructorMethod = (app) => {
  app.use('/api/people', peopleRoutes);
  app.get('*', (req, res) => {
    res.status(404).json({ message: 'Not a valid routes' });
  });
};

module.exports = constructorMethod
