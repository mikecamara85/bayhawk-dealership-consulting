import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import PublicContact from "../PublicContact";

export const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/public-contact" component={PublicContact}></Route>
      </Switch>
    </Fragment>
  );
};

export default Routes;
