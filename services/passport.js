const Passport = require("passport");
const google_strategy = require("passport-google-oauth20").Strategy;
const Mongoose = require("mongoose");
const facebook_strategy = require("passport-facebook").Strategy;
const CustomStrategy = require("passport-custom")

const keys = require("../config/keys");

User = Mongoose.model("user");

Passport.serializeUser((user, done) => {
    // console.log("user: ", user);
    // console.log("done: ", done)
    done(null, user.id);
})

Passport.deserializeUser((id, done) => {
    // console.log("id: ", id);
    // console.log("done: ", done);
    User.findById(id)
    .then((user) => {
        done(null, user)
    });
})

Passport.use(new google_strategy({
    clientID : keys.google_client_id,
    clientSecret : keys.google_client_secret,
    callbackURL : `/auth/google/callback`,
    proxy: true //this is not fucking working fuck you google stategy
}, async (access_token, refresh_token, profile, done) => {
        // console.log("Access Token : " + access_token);
        // console.log("Refresh Token : " + refresh_token);
        // console.log("profile : ",  profile);
        // console.log("done : ", done);

    const existing_user = await User.findOne({google_id : profile.id});
    if(existing_user){
        done(null, existing_user);
    }else{
        const user = await new User({google_id : profile.id}).save();
        done(null, user);
    }


}));//this gives passport knowledge of a specifc strategy of loggin in

Passport.use(new facebook_strategy({
    clientID : keys.facebook_client_id,
    clientSecret : keys.facebook_client_secret,
    callbackURL : "/auth/facebook/callback",
    proxy: true // thanks for working facebook strategy
}, async (access_token, refresh_token, profile, done) => {
        // console.log("Access Token : " + access_token);
        // console.log("Refresh Token : " + refresh_token);
        // console.log("profile : ",  profile);
        // console.log("done : ", done);

        const existing_user = await User.findOne({facebook_id : profile.id});
        if(existing_user){
            done(null, existing_user);
        }else{
            const user = await new User({facebook_id : profile.id}).save();
            done(null, user);
        }
    }));

Passport.use("firebase-google", new CustomStrategy(async ({_parsedUrl: {query: profile_id}}, done) => {

            //console.log("QUERY: ", query);
            const existing_user = await User.findOne({google_id: profile_id});

            if(existing_user){
                done(null, existing_user);
            }else{
                const user = await new User({google_id: profile_id}).save();
                done(null, user);
            }

    }
));

Passport.use("firebase-facebook", new CustomStrategy(async ({_parsedUrl: {query: profile_id }}, done) => {

    //console.log("QUERY: ", query);
    const existing_user = await User.findOne({facebook_id: profile_id});

    if(existing_user){
        done(null, existing_user);
    }else{
        const user = await new User({facebook_id: profile_id}).save();
        done(null, user);
    }

}
));