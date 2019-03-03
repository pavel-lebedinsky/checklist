const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || '3000';

app.use(express.static(__dirname + '/static'));

app.listen(port, function () {
  console.log(`Checklist app listening on port ${port}!`);
});
