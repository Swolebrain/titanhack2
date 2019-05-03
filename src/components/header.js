import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'
import "../fonts/Montserrat/montserrat.css"
import titanhacklogo from '../images/titanhack-black.png';


const Header = ({ siteTitle }) => (
  <header>
    <div className="header-container">
      <input type="checkbox" id="reveal-menu" role="button"></input>
      <div className="header-logo">
        <img src={titanhacklogo} alt="TitanHack Logo" style={{ height: '40px', width: '40px' }} />
      </div>
      <div className="nav-btn">
        <label for="reveal-menu">
          <span className="span-ham"></span>
          <span className="span-ham"></span>
          <span className="span-ham"></span>
        </label>
      </div>
      <div className="header-menu">
        <Link to="/" className="link-nav" >Home</Link>
        <Link to="/404" className="link-nav">Team</Link>
        <a target="_blank" rel="noopener noreferrer" href="http://www.titanhack.com/blog" className="link-nav" >Blog</a>
        <Link to="/404" className="link-nav">Resources</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
