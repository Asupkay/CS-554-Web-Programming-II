const express = require('express');
const router = express.Router();
const redisConnection = require('../../redis-connection');
const nrpSender = require('../nrp-sender-shim');

router.post('/', async (req, res) => {
  try {
    let response = await nrpSender.sendMessage({
      redis: redisConnection,
      eventName: 'send-message-with-reply',
      data: {
        action: 'POST',
        personData: req.body
      },
      expectResponse: false
    });
    res.json(response);
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    let response = await nrpSender.sendMessage({
      redis: redisConnection,
      eventName: 'send-message-with-reply',
      data: {
        action: 'GET',
        id: req.params.id
      }
    });
    res.json(response);
  } catch (e) {
    res.json({ error: e.message});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let response = await nrpSender.sendMessage({
      redis: redisConnection,
      eventName: 'send-message-with-reply',
      data: {
        action: 'DELETE',
        id: req.params.id
      } 
    });
    res.json(response);
  } catch (e) {
    res.json({ error: e.message});
  }
});

router.put('/:id', async (req, res) => {
  try {
    let response = await nrpSender.sendMessage({
      redis: redisConnection,
      eventName: 'send-message-with-reply',
      data: {
        action: 'PUT',
        id: req.params.id,
        personData: req.body
      }
    });
    res.json(response);
  } catch (e) {
    res.json({ error: e.message});
  }
})

module.exports = router;
