import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Payment from "./payment"
import "./App.css";

class Header extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render_header(){
        switch(this.props.auth){
            case null:
                return "......";
            
            case false:
                return <ul className="right nav-links">

                    <li><a href="#sign-up" id="sign-up-modal">sign-up</a></li>
                    <li><a href="#log-in">log-in</a></li>

                    </ul>;
            
            default:
            return <ul className="right nav-links">

            <li><p className="credits">Credits : {this.props.auth.credits}</p></li>
            <li><Payment /></li>
            <li><a href="#new" id="new">New</a></li>
            <li><a href="#dashboard" id="dashboard">Dashboard</a></li>
            <li><a href="/api/logout" id="logout">Logout</a></li>

            </ul>;
        }
    }

    render() { 

        console.log(this.props);
        return ( 
            <div>
                <div className="nav">

                    <div className="nav-header">

                        <Link to={"/"} className="left nav-branding">SurMail</Link>

                        {this.render_header()}

                    </div>
                
                </div>

                <div className="modal hidden" >

                    <a href="#x" id="X">X</a>

                    <div className="content">

                        <div className="container">

                        <label htmlFor="username">Username</label>
                        <input type="text" name="username"/>

                        <label htmlFor="email-address">email</label>
                        <input type="email" name="email-address"/>

                        <label htmlFor="password">password</label>
                        <input type="password" name="password"/>

                        <p>or</p>

                        <div><a href="/auth/google" className="button google">sign-up with google</a></div>
                        <div><a href="/auth/facebook" className="button facebook">sign-up with facebook</a></div>

                    </div>

                </div>

             </div>

            </div>
         );
    }
}

function mapStateToProps({auth}){
    return {auth};
}
 
export default connect(mapStateToProps)(Header);