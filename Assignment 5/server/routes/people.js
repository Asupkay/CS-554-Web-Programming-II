const express = require('express');
const router = express.Router();
const redisConnection = require('../../redis-connection');
const nrpSender = require('../nrp-sender-shim');

router.post('/', async (req, res) => {
  let response = await nrpSender.sendMessage({
    redis: redisConnection,
    eventName: 'send-message-with-reply',
    data: {
      action: 'POST',
      personData: req.body
    },
    expectResponse: false
  });
  res.json({message: 'not yet implemented'});
});

router.get('/:id', async (req, res) => {
  try {
    let response = await nrpSender.sendMessage({
      redis: redisConnection,
      eventName: 'send-message-with-reply',
      data: {
        action: 'POST',
        personData: req.params.id
      }
    });
    res.json(response);
  } catch (e) {
    res.json({ error: e.message});
  }
});

router.delete('/:id', (req, res) => {
  res.json({message: 'not yet implemented'});
});

router.put('/:id', (req, res) => {
  res.json({message: 'not yet implemented'});
})

module.exports = router;
