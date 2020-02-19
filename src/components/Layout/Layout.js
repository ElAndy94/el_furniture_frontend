import React from 'react';

import Navigation from '../Navigation/Navigation';
import './Layout.scss';

function Layout(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className='Content'>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
