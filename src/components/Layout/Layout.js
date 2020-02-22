import React from 'react';

import Navigation from '../Navigation/Navigation';
// import Footer from '../Footer/Footer';
import './Layout.scss';

function Layout(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className='Content'>{props.children}</main>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Layout;
