import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions";
import './App.css';

import Header from "./header";
import Landing from "./landing";
const dashboard = () => <h2>Dashboard</h2>;
const survey_new = () => <h2>New Survey</h2>;


class App extends Component {

  componentDidMount(){
    this.props.fetch_user();
  }

  render() {
    return (
      <div>
          
          <BrowserRouter>

            <div>

              <Header />

              <Route exact path="/" component={Landing} />
              <Route path="/surveys" component={dashboard} />
              <Route path="/surveys/new" component={survey_new} />

            </div>

          </BrowserRouter>

      </div>
    );
  }
}

export default connect(null, actions)(App);
