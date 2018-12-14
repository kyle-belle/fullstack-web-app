const passport = require("passport");
const google_strategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.use(new google_strategy({
    clientID : keys.google_client_id,
    clientSecret : keys.google_client_secret,
    callbackURL : "/auth/google/callback"
}, (access_token, refresh_token, profile, done) => {
    console.log("Access Token : " + access_token);
    console.log("Refresh Token : " + refresh_token);
    console.log("profile : ",  profile);
    console.log("done : ", done);
}));//this gives passport knowledge of a specifc strategy of loggin in
