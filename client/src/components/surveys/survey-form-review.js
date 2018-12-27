import React from 'react';
import {connect} from "react-redux";
import * as actions from "../../actions"

const Servey_form_review = ({onClick, form, submit_survey}) => {
    return ( 

        <div className="new-survey">

            <h1 style={{width: "80%", margin:"15px auto", padding: "15px 30px", borderRadius:"5px"}} className="yellow" >Please review your survey form.</h1>
            <p style={{width: "80%", margin:"15px auto", padding: "15px 30px", borderRadius:"5px"}} className="red">You will not be able to make any changes after you click the Send button</p>

            <div className="survey-form clearfix">
                
                <div className="form-review">

                    <h2>Survey Title</h2>
                    <h3>{form.title}</h3>
                
                </div>

                <div className="form-review">
                    
                    <h2>Subject Line</h2>
                    <h3>{form.subject}</h3>

                </div>

                <div className="form-review">
                    
                    <h2>Email body</h2>
                    <h3>{form.body}</h3>

                </div>

                <div className="form-review">

                    <h2>Recipients</h2>
                    <h3>{form.recipients}</h3>

                </div>

                <button className="button left yellow floating" onClick={onClick}>Back</button>
                <button className="button right green floating" onClick={() => submit_survey(form)}>Send</button>

            </div>
        
        </div>
    );
};

function map_state_to_props(state){
    return {
        form: state.form.surveyForm.values
    };
}
 
export default connect(map_state_to_props, actions)(Servey_form_review);