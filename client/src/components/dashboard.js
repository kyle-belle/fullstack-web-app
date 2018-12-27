import React from 'react';
import {Link} from "react-router-dom";

const Dashboard = () => {
    return ( 
        <div>
            Dashboard

            <div className="fixed-button-bottom-r circle">

                <Link to="/surveys/new" className="floating-button green circle"><i className="material-icons">add</i></Link>

            </div>
        </div>
     );
}
 
export default Dashboard;