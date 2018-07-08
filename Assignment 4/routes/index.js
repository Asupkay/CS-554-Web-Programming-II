const data = require('../data');
const redis = require('redis');
const bluebird = require('bluebird');
const accountsData = data.accounts;
const client = redis.createClient();

bluebird.promisifyAll(redis);

const constructorMethod = (app) => {
  app.get('/api/people/history', async (req, res) => {

    const history = await client.lrangeAsync('history', 0 , 19);
    let result = [];
    history.forEach((account) => {
      result.push(JSON.parse(account));
    });
    return res.json({
      result
    });
  });

  app.get('/api/people/:id', async (req, res) => {
    const id = req.params.id;
    let account = await client.getAsync(id.toString());
    if(account) {
      account = JSON.parse(account);
    } else {
      try {
        account = await data.accounts.getById(parseInt(id));
      } catch (e) {
        return res.json({
          error: e.message
        });
      }
      await client.setAsync(account.id.toString(), JSON.stringify(account));
    }

    await client.lpushAsync('history', JSON.stringify(account));

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
