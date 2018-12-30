import React, { Component } from 'react';
import SurveyForm from "./survey-form";
import SurveyReview from "./survey-form-review"
import {reduxForm} from "redux-form";

class survey_new extends Component {
    
    constructor(props){
        super(props);

        this.state = { review: false}
    }

    toogle_view = () => {

        this.setState({
            review : !this.state.review
        });

        return;
    }

    render_content(){
        if(!this.state.review){
            return <SurveyForm onClick={this.toogle_view}/>
        }else{
            return <SurveyReview onClick={this.toogle_view}/>
        }
    }

    render() { 

        return ( this.render_content() );
    }
}
 
export default reduxForm({
    form: "surveyForm",
    destroyOnUnmount:true
})(survey_new);