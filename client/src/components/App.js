import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions";
import './App.css';

import Header from "./header";
import Landing from "./landing";
import Footer from "./footer"
const dashboard = () => <h2>Dashboard</h2>;
const survey_new = () => <h2>New Survey</h2>;


class App extends Component {

  componentDidMount(){
    this.props.fetch_user();
  }

  render() {
    return (
      (window.screen.width>=900)?
      <div>
          
          <BrowserRouter>

          <div className="everything">

            <div className="everything-except-footer">

              <Header />

              <Route exact path="/" component={Landing} />
              <Route path="/surveys" component={dashboard} />
              <Route path="/surveys/new" component={survey_new} />
              
            </div>

            <Footer />

          </div>


          </BrowserRouter>

      </div>:<h2>you are not allowed to view this website with a mobile device</h2>
    );
  }
}

export default connect(null, actions)(App);
