import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Payment from "./payment";
import firebase from "firebase/app";
import "firebase/auth";
import "./App.css";

class Header extends Component {
     constructor(props) {
         super(props);

         this.init_firebase();
    }

    init_firebase(){
        var config = {
            apiKey: "AIzaSyBvvzgS6g5YRkIUv5rFsWpMkg1CmGRT_Wc",
            authDomain: "surmail.firebaseapp.com",
            databaseURL: "https://surmail.firebaseio.com",
            projectId: "surmail",
            storageBucket: "surmail.appspot.com",
            messagingSenderId: "260322950110"
        };
    
        firebase.initializeApp(config);
        firebase.auth().useDeviceLanguage();

        return;
    }

    sign_up = () => {

        var hidden = document.querySelector(".hidden");
        if(hidden){
            hidden.style.display = 'block';
            hidden.style.zIndex = "100";

            // console.log(hidden);
        }
    }

    
    async sign_up_with_google(){

        
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope("profile");
        
        provider.addScope("email");

        provider.addScope("https://www.googleapis.com/auth/plus.me");
        

        const result = await firebase.auth().signInWithPopup(provider);
       
        // console.log(result);
        // console.log("what i'm waiting for.");

        // Axios.get(`/auth/firebase/google?${result.additionalUserInfo.profile.id}`);
        // console.log(window.location);
        window.location = `${window.location.origin}/auth/firebase/google?${result.additionalUserInfo.profile.id}`;
        

        firebase.auth().onAuthStateChanged(function(user) {
            window.user = user;
        });


    }

    async sign_up_with_facebook(){

        const provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope("user_friends");
        provider.addScope("manage_pages");
        
      
        const result = await firebase.auth().signInWithPopup(provider);

        // console.log(result);
        // console.log("what i'm waiting for.");

        // Axios.get(`/auth/firebase/facebook?${result.additionalUserInfo.profile.id}`);
        // console.log(window.location);
        window.location = `${window.location.origin}/auth/firebase/facebook?${result.additionalUserInfo.profile.id}`;
        

        firebase.auth().onAuthStateChanged(function(user) {
            window.user = user;
        });


    }

    x = () => {
        var hidden = document.querySelector(".hidden");
        hidden.style.display = 'none';
        hidden.style.zIndex = "-1";
    }

    render_header(){
        switch(this.props.auth){
            case null:
                return "......";
            
            case false:
                return <ul className="right nav-links">

                    <li><button className="link" id="sign-up-modal" onClick={this.sign_up}>sign-up</button></li>
                    <li><button className="link" id="log-in">log-in</button></li>

                    </ul>;
            
            default:
            return <ul className="right nav-links">

            <li><p className="credits">Credits : {this.props.auth.credits}</p></li>
            <li><Payment /></li>
            <li><Link to="/surveys/new" id="new">New</Link></li>
            <li><Link to="/surveys" id="dashboard">Dashboard</Link></li>
            <li><a href="/api/logout" id="logout">Logout</a></li>

            </ul>;
        }
    }

    render() { 

        // console.log(this.props);
        return ( 
            <React.Fragment>
                <div className="nav" id="nav">

                    <div className="nav-header" id="nav-header">

                        <Link to={"/"} className="left nav-branding"><img src="/logo.png" alt=""/> SurMail</Link>

                        {this.render_header()}

                    </div>
                
                </div>

                <div className="modal hidden" >

                    <button className="link" id="X" onClick={this.x}>X</button>

                    <div className="content">

                        <div className="container">

                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />

                        <label htmlFor="email-address">email</label>
                        <input type="email" name="email-address" id="email"/>

                        <label htmlFor="password">password</label>
                        <input type="password" name="password" id="password"/>

                        <p>or</p>

                        <div><button onClick={this.sign_up_with_google} className="button google">sign-up with <span className="blue-text">G</span><span className="red-text">o</span><span className="yellow-text">o</span><span className="blue-text">g</span><span className="green-text">l</span><span className="red-text">e</span></button></div>
                        <div><button onClick={this.sign_up_with_facebook} className="button facebook">sign-up with Facebook</button></div>

                    </div>

                </div>

             </div>

            </React.Fragment>
         );
    }
}

function mapStateToProps({auth}){
    return {auth};
}
 
export default connect(mapStateToProps)(Header);