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
import YouTubeImg from "../images/youtube.png";

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
                <div>
                    <main>{children}</main>
                </div>
                <footer className={"footer-bg"}>
                    <img src={phone} alt="get your mobile app from us" className={"footer__phone"}/>
                <div className={"footer-subsection"}>

                    <div className={"question"}><big><h3>Do you have a project in mind?</h3></big></div>
                        <div className={"button-sct"}><a href="" className="btn-lets-talk">Talk with us!</a>
                            <div className={"footer-subsection-social-links"}>
                                <a href=""><img src={YouTubeImg} className={"social-link"} /></a>
                                 <a href=""><img src={YouTubeImg} className={"social-link"} /></a>
                            </div>
                       </div>
                        
                </div>
                </footer>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
