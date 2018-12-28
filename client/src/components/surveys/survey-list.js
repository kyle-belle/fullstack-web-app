import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetch_surveys} from "../../actions";

class survey_list extends Component {
    
    componentDidMount(){
        this.props.fetch_surveys();
    }

    render_surveys(){
        return this.props.surveys.reverse().map( (survey) => {
            return(
                <div className="dashboard-survey">

                    <h2 className="survey-title">{survey.title}</h2>

                    <h3 className="survey-subject">{survey.subject}</h3>

                    <p className="survey-body">{survey.body.replace("<br>","")}</p>

                    <small className="date">{new Date(survey.date_sent).toLocaleDateString()}</small>

                    <div className="stats">

                        <div className="stat">YES: <span>{survey.yes}</span></div>
                        <div className="stat">NO: <span>{survey.no}</span></div>

                    </div>

                </div>
            );
        });
    }

    render() { 
        return ( 
            <React.Fragment>

                <h1>Dashboard</h1>

                {this.render_surveys()}

            </React.Fragment>

        );
    }
}

function map_state_to_props({surveys}){
    return {surveys}
}
 
export default connect(map_state_to_props, {fetch_surveys})(survey_list);