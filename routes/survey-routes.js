const mongoose = require("mongoose");
const login = require("../middleware/login");
const require_credits = require("../middleware/require-credits");
const Mailer = require("../services/mailer");
const template = require("../services/templates/survey-template");

Survey = mongoose.model("survey");

module.exports = (app) => {
    app.post("/api/survey", login, require_credits, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(",").map(email => ({email : email.trim()})),
            _user: req.user.id,
            date_sent: Date.now()
        });

        const mailer = new Mailer(survey, template(survey));
        mailer.send();
    });
}