const express = require('express');
const path = require('path');
const port = 3007;
const app = express();

app.use('/lottery'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(port);
console.log('Server started');
