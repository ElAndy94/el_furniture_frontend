import React from 'react';

import './Layout.scss';

function Layout(props) {
  return (
    <React.Fragment>
      <main className='Content'>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
