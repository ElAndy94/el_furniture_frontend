import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';

function App() {
  let routes = (
    <Switch>
      <Route path='/' exact component={Home} />
      <Redirect to='/' />
    </Switch>
  );

  return (
    <React.Fragment>
      <Layout>{routes}</Layout>
    </React.Fragment>
  );
}

export default withRouter(App);
