const data = require('../data');
const accountsData = data.accounts;

const constructorMethod = (app) => {
  app.get('/api/people/history', (req, res) => {
    return res.json({
      message: 'Nice'
    });
  });
  app.get('/api/people/:id', async (req, res) => {
    let account;
    try {
      account = await data.accounts.getById(parseInt(req.params.id));
    } catch (e) {
      return res.json({
        error: e.message
      });
    }
    return res.json({
      message: account
    });
  });
  app.get('*', (req, res) => {
    return res.json({
      message: 'Not a valid route'
    });
  });

};

module.exports = constructorMethod;
