//Install express server
const express = require('express');

const app = express();

app.use(express.static('./dist/materialize'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', { root: 'dist/materialize/' });
});

app.listen(process.env.PORT || 8080);
