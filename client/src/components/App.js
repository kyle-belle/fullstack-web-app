import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions";
import './App.css';

import Header from "./header";
import Landing from "./landing";
import Footer from "./footer"
import Dashboard from "./dashboard"
import survey_new_wrapper from "./surveys/survey-new-stateless-wrapper";


class App extends Component {

  componentDidMount(){
    this.props.fetch_user();
  }

  render() {
    return (
      <div>
          
          <BrowserRouter>

          <div className="everything">

              <Header />

            <div className="everything-except-footer">

              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route exact path="/surveys/new" component={survey_new_wrapper} />
              
            </div>

            <Footer />

          </div>


          </BrowserRouter>

      </div>
    );
  }
}

export default connect(null, actions)(App);
