import React, { Component } from 'react';
import {reduxForm, Field} from "redux-form";
import surveyFields from './survey-fields';
import {Link} from "react-router-dom"
import validate_emails from "../../util/validate-email"

class SurveyForm extends Component {

    render_fields(){
        return (
            <div className="form-inputs">

                <Field label ="Survey Title"type="text" name="title" component={surveyFields} />

                <Field label="Subject line" type="text" name="subject" component={surveyFields} />

                <Field label="Email body" type="text" name="body" component={surveyFields} />

                <Field label="Recipients List" type="text" name="recipients" component={surveyFields} />

            </div>
        );
    }

    render() { 
        return (
            <div className="new-survey">
                <h1 style={{width: 90 + "%", marginLeft: "auto", marginRight: "auto", color: "rgb(0,150,0)"}}>New Survey!!!</h1>

                <form onSubmit={this.props.handleSubmit( this.props.onClick )} className="survey-form clearfix" >

                    {this.render_fields()}

                    <Link to="/surveys" className="button red left floating">Cancel <i className="material-icons">close</i></Link>

                    <button type="submit" className="button green right floating">Next <i className="material-icons">done</i></button>

                </form>

            </div>
        );
    }
}

function validate(values){
    const errors = {};

    //console.log(values);

    if(!values.title){
        errors.title = "please enter a Title!!!";
    }
    
    if(!values.subject){
        errors.subject = "please enter a Subject!!!";
    }
    
    if(!values.body){
        errors.body = "please enter an Email Body!!!";
    }

    errors.recipients = validate_emails(values.recipients);
    console.log(errors);

    if(!values.recipients){
        errors.recipients = "please enter atleast one Email!!!";
    }
    

    return errors;
}
 
export default reduxForm({
    validate,
    form: "surveyForm",
    destroyOnUnmount: false
})(SurveyForm);