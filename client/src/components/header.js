import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Payment from "./payment";
import firebase from "firebase/app";
import "firebase/auth";
import keys from "../config/keys"
import "./App.css";

class Header extends Component {
     constructor(props) {
        super(props);
        document.querySelector("body").addEventListener('click', (e)=>{
            var actions = document.getElementById("actions");
            var drop_down_btn = document.querySelector(".drop-down-btn-wrapper");

            if(!actions.contains(e.target)){
                if(e.target.classList.contains("drop-down-btn")){
                    return;
                }
                if(actions.classList.contains("show")){
                    actions.classList.remove("show");
                    actions.classList.add("hide");
                    drop_down_btn.classList.remove("rotate");
                }
            }
        });
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
        //window.location.reload();
        firebase.auth().onAuthStateChanged(function(user) {
            window.user = user;
        });
        
        window.location = keys.url_prefix + "/auth/firebase/google?" + result.additionalUserInfo.profile.id;
        



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
        firebase.auth().onAuthStateChanged(function(user) {
            window.user = user;
        });

        window.location = `${keys.url_prefix}/auth/firebase/facebook?${result.additionalUserInfo.profile.id}`;
        


    }

    x = () => {
        var hidden = document.querySelector(".hidden");
        hidden.style.display = 'none';
        hidden.style.zIndex = "-1";
    }

    drop_down_click = () => {
        var actions = document.getElementById("actions");
        var drop_down_btn = document.querySelector(".drop-down-btn-wrapper");
        if(actions.classList.contains("hide")){
            actions.classList.remove("hide");
            actions.classList.add("show");
            drop_down_btn.classList.add("rotate");
        }else{
            actions.classList.remove("show");
            actions.classList.add("hide");
            drop_down_btn.classList.remove("rotate");
        }
    }

    render_header(){
        switch(this.props.auth){
            case null:
                return "......";
            
            case false:
                return <ul className="right nav-links">

                    <li><button className="link" id="sign-up-modal" onClick={this.sign_up}>Sign-In</button></li>

                    </ul>;
            
            default:
            return <div className="right header-buttons">
                <ul className="nav-links">

                <li className="credit-li"><p className="credits"><i className="material-icons icon">drafts</i> <span className="hide-mobile">Credits</span> : {this.props.auth.credits}</p></li>
                <li className="add-li"><Payment /></li>
                
                </ul>

                <ul className="nav-links">
                <div className="actions-wrapper">

                    <div class="drop-down-btn-wrapper">
                        <i className="material-icons icon drop-down-btn show-mobile" onClick={this.drop_down_click}>arrow_drop_down</i>
                    </div>

                    <div className="actions hide" id="actions">
                        <li><Link to="/surveys/new" id="new" onClick={this.drop_down_click}>New</Link></li>
                        <li><Link to="/surveys" id="dashboard" onClick={this.drop_down_click}>Dashboard</Link></li>
                        <li><a href={keys.url_prefix + "/api/logout"} id="logout">Logout</a></li>
                    </div>

                </div>
                </ul>
            </div>
        }
    }

    render() { 

        // console.log(this.props);
        return ( 
            <React.Fragment>
                <div className="nav" id="nav">

                    <div className="nav-header" id="nav-header">

                        <div className="brand-link-div"><Link to={"/"} className="left nav-branding"><img src="/logo.png" alt=""/> SurMail</Link></div>

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