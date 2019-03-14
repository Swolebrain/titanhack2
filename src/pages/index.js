import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WhatWeDoSection from "../components/whatwedo"

import "../components/index.css"

import PcHero from '../images/hero-pc.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="flex-container">
            <div className="container-text-img">
                <p>Hello, we are Titanhack
                    A software Engineering XO
                    Based in Miami, FL

                    </p>
            </div>
            <img src={PcHero} alt="pc hero" />
    </div> 
        
            <WhatWeDoSection/>
  </Layout>
)

export default IndexPage
