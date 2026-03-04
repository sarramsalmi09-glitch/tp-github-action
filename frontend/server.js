const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Frontend is working!</h1><p><a href="/api">Check backend</a></p>');
});

app.get('/api', async (req, res) => {
  try {
    const response = await fetch('http://backend:5000');
    const data = await response.json();
    res.send(`<h1>Backend response:</h1><pre>${JSON.stringify(data, null, 2)}</pre>`);
  } catch (error) {
    res.send('<h1>Error connecting to backend</h1>');
  }
});

app.listen(port, () => {
  console.log(`Frontend running on port ${port}`);
});
