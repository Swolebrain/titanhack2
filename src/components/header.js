import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import  './header.css'
import "../fonts/Montserrat/montserrat.css"
import titanhacklogo from '../images/titanhack-black.png';


const Header = ({ siteTitle }) => (
  <header>
        <div className="header-container">
            <div className="header-logo">
                <img src={titanhacklogo} style={{height: '40px',width: '40px'}} />
            </div>
            <div className="header-menu">  
                <Link to="/page-2/" className="link-nav" >Home</Link>
                <Link to="/resources/" className="link-nav">Team</Link>
                <Link to="/page-2/" className="link-nav" >Blog</Link>
                <Link to="/resources/" className="link-nav">Resources</Link>
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
