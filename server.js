const express = require('express');
const app = express();
const port = 3000;

// At root '/', send 'Hello World' response
app.get('/', (req, res) => {
  res.send('Hello World');
});

// App listening on port 3000 for requests 
app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});