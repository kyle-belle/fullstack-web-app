const keys = require("../../config/keys");
module.exports = (survey) => {
    return `
    <html style="color: black">
    <div style="background-color: lightgray; padding: 50px 0; margin: 0 auto;">
        <div style="background-color: white; width: 80%; padding: 20px; box-shadow: 1px 1px 3px  rgba(0,0,0,0.9), -1px -1px 3px  rgba(0,0,0,0.9); margin: 0 auto;">
    
            <div style="height: 50px; line-height: 50px; color: white; box-shadow: 2px 2px 3px rgba(0,0,0,0.5); border-bottom: 1px solid lightgray;">
    
                <div style="margin: 0 auto;"><a style="font-size: 2rem; color: rgb(0,150,0); text-decoration: none; position: relative;" href="${keys.url}"><img src="https://surmail.herokuapp.com/logo.png" alt="Logo" style="position: absolute; top: 20px; height: 40px; align-self:center;"/>&nbsp;Surmail</a></div>
    
            </div>
    
            <div style="margin-top: 20px; width: 95%; ">
                <h1 style="color: black;">Dear customer</h1>
                <h2 style="color: black;">We would love your feedback</h2>
                <h3 style="color: black;">Please answer the following question</h3>
                
                <p style="line-height: 1.2; text-align: center; font-size: 1rem; font-weight: bold; margin-top: 50px;  padding-top: 20px; color: black;">${survey.body}</p>
                
                <div style="width: 90%; margin: 0 auto; text-align: center; position: relative;">
                    
                    <a style="position: absolute; display: inline-block; padding: 10px 20px; background-color: rgb(0,150,0); color: white; box-sizing: border-box; text-decoration: none; max-width: 45%; min-width: 30%;" href="${keys.url}/api/surveys/${survey.id}/yes">Yes</a>
                    
                    <a style="position: absolute; display: inline-block; padding: 10px 20px; background-color: rgb(0,150,0); color: white; box-sizing: border-box; text-decoration: none; max-width: 45%; min-width: 30%;" href="${keys.url}/api/surveys/${survey.id}/no">Yes</a>
    
                </div>
    
                <p style="font-size: 60%">BTW the second one is no.</p>
            
            </div>
    
        </div>
    </div>
    </html>
    ` ;
}