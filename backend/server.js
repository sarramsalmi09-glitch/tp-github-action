const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
