const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || '3000';

app.use(express.static('static'));

app.get('/api', function(req, res) {
  res.send('running...');
});

app.listen(port, function () {
  console.log(`Checklist app listening on port ${port}!`);
});
