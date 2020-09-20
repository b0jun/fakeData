import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default () => (
  <Router>
    <>
      <Switch>
        {/* <Route path="/" exact component={} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
