const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'portfolio')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
