import React from 'react';
import {Link} from "react-router-dom";
import SurveyList from "./surveys/survey-list";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <SurveyList />

            <div className="fixed-button-bottom-r circle">

                <Link to="/surveys/new" className="floating-button green circle"><i className="material-icons">add</i></Link>

            </div>

        </div>
     );
}
 
export default Dashboard;