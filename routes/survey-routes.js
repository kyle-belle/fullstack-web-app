const _ = require("lodash");
const Path = require("path-parser").default;
const {URL} = require("url");
const mongoose = require("mongoose");
const login = require("../middleware/login");
const require_credits = require("../middleware/require-credits");
const Mailer = require("../services/mailer");
const template = require("../services/templates/survey-template");

Survey = mongoose.model("survey");

module.exports = (app) => {

    app.get("/api/surveys/:survey_id/:choice", (req, res) => {
        const p = new Path("/api/surveys/:survey_id/:choice");
        //const path_name = new URL(req.url).pathname;
        const match = p.test(req.url);
        let our_response = "Thanks for giving feedback!!!\n<br>";


        if(match){
            if(match.choice === "no"){
                our_response += " we'er sorry to hear that you did not enjoy our service. :-("; 
            }else if(match.choice === "yes"){
                our_response += " we'er happy to hear that you enjoyed our service. :-)";
            }
        }

        res.send(our_response);
    });

    app.post("/api/survey/webhooks", (req, res) => {
       const p = new Path("/api/surveys/:survey_id/:choice");

    //    console.log(URL);
    //    console.log(req.body);

       _.chain(req.body).map(({email, url}) => {
        //    console.log(`url: ${url}`);
           const path_name = new URL(url).pathname;
        //    console.log(`path_name: ${path_name}`);
           const match = p.test(path_name);

           if(match){
               return {email, survey_id: match.survey_id, choice: match.choice};
           }

       }).compact().uniqBy("email", "survey_id").each( ({email, choice, survey_id}) => {
           Survey.updateOne({
               _id: survey_id,
               recipients: {
                   $elemMatch:{ email , responded: false}
               }
           },{
               $inc: {[choice]: 1},
               $set: {"recipients.$.responded": true},
               last_responded: new Date()
           }).exec();
       }).value();

       res.send({Thanks: "sendgrid"});

    });

    app.get("/api/surveys", login, async (req, res) => {
        const surveys = await Survey.find({_user: req.user.id}).select({recipients: 0});
        res.send(surveys);
    });


    app.post("/api/survey", login, require_credits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(",").map(email => ({email : email.trim()})),
            _user: req.user.id,
            date_sent: Date.now()
        });

        try{
            const mailer = new Mailer(survey, template(survey));
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();

            res.send(user);
        }catch(err){
            res.status(422).send(err);
        }
    });
}