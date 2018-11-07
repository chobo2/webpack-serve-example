import React, { Component } from "react";
import "react-dom";
import { observer, inject } from "mobx-react";
import { withRouter, Route, Link } from "react-router-dom";

import HomeComponent from "./HomeComponent"
import ParamRouteComponent from "./ParamRouteComponent"
import TestComponent from "./TestComponent";

import Page1 from "./Page1";
import Page2 from "./Page2";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const accountSetupStore = props.AccountSetupStore;
    return (
      <React.Fragment>
        <Link to="/">Home</Link><br />
        <Link to="/test/company/1/employee/1">Param Route</Link> <br />
        <Link to="/test/why">Why Does This do full re-render</Link> <br />
        <Link to="/test/page1">page1</Link><br />
        <Link to="/test/page2">page2</Link><br />
        <Route exact path="/"  component={HomeComponent} />
        <Route path="/test/company/:companyId/employee/:employeeId" component={ParamRouteComponent} />
        <Route path="/test/why" component={TestComponent} />
        <Route path="/test/page1" component={Page1} />
        <Route path="/test/page2" component={Page2} />
      </React.Fragment>
    );
  }
}
