const express = require('express');
const app = express();
const port = 3000;
// A basic route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express!</h1>');
});
// A route for about page
app.get('/about', (req, res) => {
  res.send('<h1>About This App</h1><p>Built with Express.js</p>');
});
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
