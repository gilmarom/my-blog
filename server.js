const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html' ));
});

const server = http.createServer(app);
// Start the app by listening on the default Heroku port
server.listen(process.env.PORT || 8080);