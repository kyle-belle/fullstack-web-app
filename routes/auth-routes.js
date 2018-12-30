const Passport = require("passport");
const firebase_id = require("../middleware/firebase");

module.exports = (app) => {
    app.get("/auth/google", Passport.authenticate("google", {
        scope: ["profile", "email"]
    }));

    
    app.get("/auth/google/callback", Passport.authenticate("google"), (req, res) => {
        // console.log(req.session);
        res.redirect("/");
    });


    //google firebase
    app.get("/auth/firebase/google", firebase_id, Passport.authenticate('firebase-google'), (req, res) => {res.redirect("/")});

    
    //facebook firebase
    app.get("/auth/firebase/facebook", firebase_id, Passport.authenticate('firebase-google'), (req, res) => {res.redirect("/")});

    
    app.get("/auth/facebook", Passport.authenticate("facebook", {
        scope: ["user_friends", "manage_pages"]
    }));

    
    app.get("/auth/facebook/callback", Passport.authenticate("facebook"), (req, res) => {
        // console.log(req.session);
        res.redirect("/");
    });

    
    app.get("/api/current_user", (req, res) => {
        res.send(req.user || false);
    });

   
    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

};