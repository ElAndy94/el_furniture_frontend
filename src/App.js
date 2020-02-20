import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Furniture from './containers/Furniture/Furniture';
import Stores from './containers/Stores/Stores';
import About from './containers/AboutUs/AboutUs';

function App() {
  let routes = (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/furniture' exact component={Furniture} />
      <Route path='/stores' exact component={Stores} />
      <Route path='/about' exact component={About} />
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
