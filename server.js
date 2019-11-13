var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8060;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json({ type: 'application/*+json'}))

app.use(bodyParser.raw({ type: 'application/vdn.custom-type'}))

app.use(bodyParser.text({ type: 'text/html'}))

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("app listening on PORT:" + PORT);
});