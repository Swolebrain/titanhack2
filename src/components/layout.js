/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "./header"
import "./layout.css"

//images
import spiral from '../images/footer_bg_spirals.svg';
import phone from '../images/footer-phone.svg';

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title}/>
                <div
                    style={{    
                        padding: `0px 1.0875rem 1.45rem`,
                        paddingTop: 0,
                    }}  
                >
                    <main>{children}</main>
                </div>
                <footer>
                    <img src={phone} alt="get your mobile app from us" className={"footer__phone"}/>
                </footer>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
