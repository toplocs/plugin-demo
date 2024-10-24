const express = require('express');
const path = require('path');
const cors = require('cors');


const PORT = 3000;

const app = express();

app.use(cors());

app.get('/plugin-demo.umd.cjs', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, 'views/plugin-demo.umd.cjs'));
});

app.listen(PORT);

console.log(`Listening on: http://localhost:${PORT}`);