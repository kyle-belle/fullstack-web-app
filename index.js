const express = require("express"); //node's silly way of doing imports
const cookie_session = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");

require("./db-models/users");
require("./services/passport");

mongoose.connect(keys.mongodb_link, {useNewUrlParser: true});//connects to mongo database

const app = express(); //creates an express app returning a super-object of sorts
app.use(cookie_session({
    maxAge : 30 *24 * 60 * 60 * 1000,
    keys: [keys.cookie_key]
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => { //handler for get request to said directory
    res.send({hello: 'world'});
});

require("./routes/auth-routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT); //sets up app to listen on port 5000