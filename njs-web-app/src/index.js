const express = require('express');
const { createClient } = require('redis');

const app = express();
const client = createClient({ url: 'redis://redis:6379' });

client.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await client.connect();
  await client.set('visits', 0);

  app.get('/', async (req, res) => {
    try {
      let visits = parseInt(await client.get('visits')) || 0;
      visits++;
      await client.set('visits', visits);
      res.send(`Number of visits: ${visits}`);
    } catch (err) {
      console.error('Error fetching visits:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  app.listen(80, () => {
    console.log('Server is running on port 80.');
  });
})();