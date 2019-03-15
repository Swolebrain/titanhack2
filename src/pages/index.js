import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WhatWeDoSection from "../components/whatwedo"
import OurWorkCard from "../components/ourworkcard"

import "../components/index.css"
import "../fonts/Montserrat/montserrat.css"
import "../fonts/AlegreyaSans/alegreyasans.css"

import HeroSquiggles from '../images/hero-squiggles.svg';
import PcHero from '../images/hero-pc.svg';
import KiddieKreditImg from '../images/kiddiekredit.svg';
import UvVectorImg from '../images/uv_vector.svg';

const IndexPage = () => ( 
    <Layout >
    < SEO title = "Home"  keywords = {[`gatsby`, `application`, `react`]}/>

    <div className = "flex-container">
      <div className = "container-text-img">
        <img src = {HeroSquiggles} alt = "pc squiggles" />
            <div className="centered-text">
              <h1> Hello, we are <span className = "text-titanhack"> Titanhack </span> </h1> 
              <p> A software Engineering XO Based in Miami, FL </p>              
            </div> 
      </div> 
      <img src = {PcHero} alt = "pc hero" />
    </div> 

    <WhatWeDoSection />
    <OurWorkCard projectName="Kiddie Kredit" urlImage={KiddieKreditImg}
        aboutProject="A mobile app experience teaching financial literacy for all." />
    <OurWorkCard projectName="UV Vector" urlImage={UvVectorImg}  
        aboutProject="A entertaiment app experience looking to dance." />

    </Layout>
)

export default IndexPage
