import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. {' '}
          <a href="http://www.dalyshipping.ie/">Brendan Daly Shipping</a>.
        </span>
      </div>
    </footer>
  </div>
)
