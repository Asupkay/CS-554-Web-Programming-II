const redisConnection = require('../redis-connection');
const axios = require('axios');

const dataUrl = 'https://gist.githubusercontent.com/philbarresi/5cf15393d245b38a2d86ce8207d5076c/raw/d529fb474c1af347702ca4d7b992256237fa2819/lab5.json';

const getHandler = (data, id) => {
  id = parseInt(id)
  if(isNaN(id)) {
    return 'ID must be a number'
  }
  const person = data[id - 1];
  if(person) {
    return person;
  } else {
    return `Person(${id}) does not exist`;
  }
}

const postHandler  = (data, newP) => {
  const id = data.length + 1;

  const { first_name = undefined, last_name = undefined, email = undefined, gender = undefined, ip_address = undefined} = newP
  if(!first_name || typeof first_name !== 'string') {
    return 'No first_name field or it is not a string';
  }
  if(!last_name || typeof last_name !== 'string') {
    return 'No last_name field or it is not a string';
  }
  if(!email || typeof email !== 'string') {
    return 'No email field or it is not a string';
  }
  if(!newP.gender || typeof gender !== 'string') {
    return 'No gender field or it is not a string';
  }
  if(!ip_address || typeof ip_address !== 'string') {
    return 'No ip_address field or it is not a string';
  }

  data[id - 1] = {
    id,
    first_name,
    last_name,
    email,
    gender,
    ip_address
  };
  return data[id -1];
}

const deleteHandler = (data, id) => {
  id = parseInt(id)
  if(isNaN(id)) {
    return 'ID must be a number'
  }
  if(data[id - 1]) {
    delete data[id - 1];
    return `Person(${id}) was deleted`
  } else {
    return `Person(${id}) does not exist`;
  }
}

const putHandler = (data, id, updatedP) => {
  id = parseInt(id)
  if(isNaN(id)) {
    return 'ID must be a number'
  }
  if(!data[id - 1]) {
    return `Person(${id}) does not exist`;
  }

  const { first_name = undefined, last_name = undefined, email = undefined, gender = undefined, ip_address = undefined} = updatedP
  if(first_name && typeof first_name !== 'string') {
    return "first_name must be a string";
  }
  if(last_name && typeof last_name !== 'string') {
    return "last_name must be a string";
  }
  if(email && typeof email !== 'string') {
    return "email must be a string";
  }
  if(gender && typeof gender !== 'string') {
    return "gender must be a string";
  }
  if(ip_address && typeof ip_address !== 'string') {
    return "ip_address must be a string";
  }

  const keys = ['first_name', 'last_name', 'email', 'gender', 'ip_address'];
  Object.keys(updatedP).forEach((key) => {
    if(keys.indexOf(key) !== -1) {
      data[id - 1][key] = updatedP[key];
    }
  });
  return data[id - 1];
}

const main = async () => {
  try {
    const gist = await axios.get(dataUrl);
    const gistResults = gist.data;
    redisConnection.on('send-message-with-reply:request:*', (message, channel) => {
      const requestId = message.requestId;
      const eventName = message.eventName;
      const action = message.data.action;
      const messageText = message.data.message;
      const successEvent = `${eventName}:success:${requestId}`;
      let returnData = false;

      if(action == 'GET') {
        returnData = getHandler(gistResults, message.data.id);
      } else if (action == 'POST') {
        returnData = postHandler(gistResults, message.data.personData);
      } else if (action == 'DELETE') {
        returnData = deleteHandler(gistResults, message.data.id);
      } else if (action == 'PUT') {
        returnData = putHandler(gistResults, message.data.id, message.data.personData);
      }
      redisConnection.emit(successEvent, {
        requestId: requestId,
        data: returnData,
        eventName: eventName
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

main();
