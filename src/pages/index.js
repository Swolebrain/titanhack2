import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WhatWeDoSection from "../components/whatwedo"


import "../components/index.css"
import "../fonts/Montserrat/montserrat.css"
import "../fonts/PlayfairDisplay/playfairdisplay.css"
import "../fonts/AlegreyaSans/alegreyasans.css"

import HeroSquiggles from '../images/hero-squiggles.svg';
import PcHero from '../images/hero-pc.svg';
import KiddieKreditImg from '../images/kiddiekredit.svg';
import UvVectorImg from '../images/uv_vector.svg';
import OurWorkSection from "../components/OurWorkSection";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

        <div className="hero-container">
            <img src={HeroSquiggles} alt="pc squiggles" className={"hero-squiggles"}/>
            <div className="container-text-img">
                <h1> Hello, we are <span className="text-titanhack"> TitanHack </span></h1>
                <p> A software Engineering XO Based in Miami, FL </p>
            </div>
            <img src={PcHero} alt="pc hero" style={{height: '95vh'}} className={"hero-pc"}/>
        </div>

        <WhatWeDoSection/>
        <OurWorkSection />



    </Layout>
)

export default IndexPage
