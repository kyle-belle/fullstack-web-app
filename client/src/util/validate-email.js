const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails = "") => {
    const invalid_emails = emails.split(",").map( (email) => email.trim()).filter( (email) => !regex.test(email) );

    if(invalid_emails.length){
        return `these emails are invalid: ${invalid_emails}`;
    }

    return null;
}