const axios = require('axios')
const redisConnection = require('./redis-connection');
require('dotenv').load();

redisConnection.on('fetch-picture', async (data, channel) => {
  console.log("querying for picture");
  const url = `https://pixabay.com/api?key=${process.env.PIXABAY_KEY}&q=${data.picture}`
  try {
  response = await axios.get(url);
  } catch (e) {
    console.log(e.message);
  }
  
  let picture = null;
  if (response.data.hits.length > 0) {
    picture = response.data.hits[0].largeImageURL;
  } else {
    picture = "/public/img/404.jpg"      
  }

  const message = {
    username: data.username,
    picture: picture,
    messageInput: data.messageInput 
  }

  console.log("returning picture " + message);
  redisConnection.emit('return-picture', message)
}); 
