const express = require('express');

const app = express();

(async () => {
  app.get('/', async (req, res) => {
    try {
      const response = await fetch('http://njs-web-app')

      return res.send(await response.text());
    } catch (err) {
      console.error('Error fetching visits:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  app.listen(80, () => {
    console.log('Server is running on port 80.');
  });
})();