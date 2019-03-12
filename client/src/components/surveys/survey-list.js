import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetch_surveys, fetch_survey_recipients, hide_recipients} from "../../actions";

class survey_list extends Component {
    
    state = {show_recipients: false};

    componentDidMount(){
        this.props.fetch_surveys();
    }

    render_recipients(survey){
        //console.log("render_recipients");
        //console.log(this.props.show_id, survey);
        if(this.props.show_id === survey._id){
           // console.log("show_id");
            return (
            <div className="stats">

                <ul>
                    {this.props.recipients.map((recipient) => { 
                        //console.log(recipient.email);
                        return (
                            <li className="stat" key={recipient.email}>
                                <span><h3>Email: <span>{recipient.email}, &nbsp; </span>
                                Responded: <span>{recipient.responded? "true": "false"}</span></h3></span>
                            </li>

                        )
                    })}
                </ul>

            </div>
            );
        }
    }

    render_surveys(){
        return this.props.surveys.map( (survey) => {
            return(
                <div className="dashboard-survey clickable" key={this.props.surveys.indexOf(survey)} onClick={ async () => { 
                    if(this.props.show_id !== survey._id){
                      await this.props.fetch_survey_recipients(survey._id); 
                    }else if(this.props.show_id === survey._id ){
                        this.props.hide_recipients();
                    }
                }}>

                    <h2 className="survey-title">{survey.title}</h2>

                    <h3 className="survey-subject">{survey.subject}</h3>

                    <p className="survey-body">{survey.body.replace("<br>","")}</p>

                    <small className="date">{new Date(survey.date_sent).toLocaleDateString()}</small>

                    <div className="stats">

                        <div className="stat">YES: <span>{survey.yes}</span></div>
                        <div className="stat">NO: <span>{survey.no}</span></div>

                        <div className="stat right">sent by: <span style={{color: "rgb(80,100,80)"}}>{survey.sender}</span></div>

                    </div>

                    {this.render_recipients(survey)}

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

function map_state_to_props({survey: {surveys, recipients, show_id}}){
    return {surveys, recipients, show_id}
}
 
export default connect(map_state_to_props, {fetch_surveys, fetch_survey_recipients, hide_recipients})(survey_list);