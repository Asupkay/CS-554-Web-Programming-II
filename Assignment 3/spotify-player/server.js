const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(bodyParser.json());

app.get('/tracks', async (req, res) => {
  const clientID = '314d98c513da4c0aa912f8722d7a6f50';
  const clientSecret = '5a8b06b8e5b84d28a6edef4e0fb0af89';

  const authResponse = await axios({
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

  console.log(authResponse);
  const authCode = authResponse.data.access_token;

  const musicResponse = await axios.get('https://api.spotify.com/v1/search?q=Counting%20Stars&type=track&limit=21', { headers: {'Authorization': `Bearer ${authCode}`, 'Access-Control-Allow-Origin': '*'}});
  
  console.log(musicResponse.data.tracks);
  return res.json({tracks: musicResponse.data.tracks});
  

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
