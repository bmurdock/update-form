const express = require('express');

const port = 8765;

const app = express();

app.use(express.static('public'));

app.listen(port, function (err) {
    if (err) {
        console.error('error starting the server: ', err);
    }
    console.log(`Server is started on port ${port}`);
});