var express = require("express");
var bodyParser = require("body-parser");
const cors = require('cors');
var app = express();

let whitelist = ['http://client.4c3711.xyz/']

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        if (!origin) return callback(null, true);
        if (whitelist.indexOf(origin) === -1) {
            var message = `The CORS policy for this origin doesn't ` +
            `allow access from the particular origin.`;
            return callback(new Error(message), false);
        }
        return callback(null, true);
    }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});