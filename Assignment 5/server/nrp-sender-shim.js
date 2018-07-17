const uuid = require('node-uuid');
const NRP = require('node-redis-pubsub');

const nrpConfig = {
  port: 6379,
  scope: 'queue'
};

const defaultRedisConnection = new NRP(nrpConfig);

const defaultMessageConfig = {
  data: {},
  timeout: 1000,
  eventName: 'send',
  redis: defaultRedisConnection,
  expectsResponse: true
};

const sendMessage = (messageConfig = defaultMessageConfig) => {
  return new Promise((fulfill, reject) => {
    let settings = Object.assign({}, defaultMessageConfig, messageConfig);
    let messageId = uuid.v4();
    let killswitchTimeoutId = undefined;
    let redisConnection = settings.redis;
    let eventName = settings.eventName;
    let outgoingEventName = `${eventName}:request:${messageId}`;

    console.log("here");
    let successEventName = `${eventName}:success:${messageId}`;
    let failedEventName = `${eventName}:failed:${messageId}`;

    console.log("here");
    let success = redisConnection.on(
      successEventName,
      (response, channel) => {
        fulfill(response.data);
        endMessageLifeCycle();
      }
    );
    
    console.log("here");
    let error = redisConnection.on(failedEventName, (response, channel) => {
      reject(response.data);
      endMessageLifeCycle();
    });

    console.log("here");
    let shutoffEvent = [success, error];

    let endMessageLifeCycle = () => {
      shutoffEvent.forEach(shutOff => {
        shutOff();
      });
      clearTimeout(killswitchTimeoutId);
    };
    
    console.log("here");
    if(settings.timeout >= 0) {
      killswitchTimeoutId = setTimeout(() => {
        reject(new Error('timed out'));
        endMessageLifeCycle();
      }, settings.timeout);
    }

    redisConnection.emit(outgoingEventName, {
      requestId: messageId,
      data: settings.data,
      eventName: settings.eventName
    });
    console.log("here");
    if(settings.expectsResponse) {
      fulfill();
    }
  });
};

module.exports = {
  sendMessage
};
