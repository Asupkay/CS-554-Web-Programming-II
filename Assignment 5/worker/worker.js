const redisConnection = require('../redis-connection');
const axios = require('axios');

const dataUrl = 'https://gist.githubusercontent.com/philbarresi/5cf15393d245b38a2d86ce8207d5076c/raw/d529fb474c1af347702ca4d7b992256237fa2819/lab5.json';

const main = async () => {
  console.log("up and atup");
  const gist = await axios.get(dataUrl);
  const gistResults = gist.data;
  console.log(gistResults);
  redisConnection.on('send-message-with-reply:request:*', (message, channel) => {
    const requestId = message.requestId;
    const eventName = message.eventName;
    let successEvent = `${eventName}:success:${requestId}`;

    console.log("here");
    //redisConnection.emit(successEvent, {
    //    data
    //  },
    //  eventName: eventName
    //});
  });
};

main();
