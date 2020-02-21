import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Footer.scss';

function Footer() {
  let phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%'
  };

  return (
    <React.Fragment>
      <div style={phantom} />
      <footer>
        <div className='wrapper flex footer-container'>
          <article>
            <h4 className='footer-header'>Site</h4>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/furniture'>Furniture</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
            </ul>
          </article>
          <article>
            <h4 className='footer-header'>Follow us</h4>
            <ul className='footer-ul'>
              <li>
                <a
                  href='https://twitter.com/APeliza'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i
                    className='fab fa-twitter fa-lg'
                    style={{ color: '#1DA1F1' }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/ElAndy94'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-github fa-lg'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://stackoverflow.com/users/4920343/andrew?tab=profile'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i
                    className='fab fa-stack-overflow fa-lg'
                    style={{ color: '#FF9900' }}
                  ></i>
                </a>
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default withRouter(Footer);
