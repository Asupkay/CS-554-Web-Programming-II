const express = require('express');
const app = express()
const redisConnection = require('./redis-connection');

const http = require('http').Server(app);
const io = require('socket.io')(http);

const pictureChat = io.of("/picture-chat");

const staticFiles = express.static(`${__dirname}/public`);
app.use('/public', staticFiles);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

pictureChat.on("connection", socket => {
  socket.on('send-picture', msg => {
    console.log("fetching picture");
    redisConnection.emit('fetch-picture', msg);
  });
});

redisConnection.on('return-picture', (data, channel) => {
  console.log("returning picture!!!!");
  console.log(JSON.stringify(data));
  pictureChat.emit('add-picture', data);
});

http.listen(3000);
