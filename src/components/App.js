import React, { Component } from "react";
import "react-dom";
import { observer, inject } from "mobx-react";
import { withRouter, Route, Link } from "react-router-dom";

import HomeComponent from "./HomeComponent"
import ParamRouteComponent from "./ParamRouteComponent"

@withRouter
@inject("routingStore")
@observer
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
        <Link to="/test/company/1/employee/1">Param Route</Link>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/test/company/:companyId/employee/:employeeId" component={ParamRouteComponent} />
      </React.Fragment>
    );
  }
}
