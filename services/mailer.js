const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
    constructor({subject, recipients, sender}, content){
        super();

        this.sendgrid = sendgrid(keys.sendgrid_key);
        this.from_email = new helper.Email(sender);
        this.subject = subject;
        this.body = new helper.Content("text/html", content);
        this.recipients = this.format_addresses(recipients);

        this.addContent(this.body);
        this.add_click_tracking();
        this.add_recipients();

    }

    add_click_tracking(){
        const tracking_settings = new helper.TrackingSettings();
        const click_tracking = new helper.ClickTracking(true, true);

        tracking_settings.setClickTracking(click_tracking);
        this.addTrackingSettings(tracking_settings);
    }

    add_recipients(){
        const personalize = new helper.Personalization();

        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });

        this.addPersonalization(personalize);
    }

    format_addresses(recipients){
        return recipients.map(({email}) => {
            return helper.Email(email);
        });
    }

    async send(){ // why is this async???
        const request = this.sendgrid.emptyRequest({
            method: "POST",
            path: "/v3/mail/send",
            body: this.toJSON()
        });


        return (await this.sendgrid.API(request));

    }

}

module.exports = Mailer;