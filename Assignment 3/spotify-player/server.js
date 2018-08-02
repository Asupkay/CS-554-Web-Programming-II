const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
require('dotenv').config()

app.use(bodyParser.json());

app.get('/tracks', async (req, res) => {
  const clientID = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET

  let authResponse = null
  try {
    authResponse = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': `Basic ${(new Buffer(clientID + ':' + clientSecret).toString('base64'))}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        grant_type: 'client_credentials'
      }
    });
  } catch (error) {
    console.log(error);
  }

  const authCode = authResponse.data.access_token;

  const musicResponse = await axios.get(`https://api.spotify.com/v1/search?q=${req.query.songName}&type=track&limit=21`, { headers: {'Authorization': `Bearer ${authCode}`, 'Access-Control-Allow-Origin': '*'}});
  
  return res.json({tracks: musicResponse.data.tracks});
  

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
