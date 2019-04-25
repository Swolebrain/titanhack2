import React from "react"
import Header from "../components/header"

import PcHero from '../images/hero-pc.svg';
import "../components/404.css"

const NotFoundPage = () => (
  <>
      <Header siteTitle="titanhack"/>
      <div className={"main-container"}>
        <img src={PcHero} alt="pc hero" className={"working-img"}/> 
        <h1>Coming Soon</h1>
        <span className={"span"}>Titanhack is currently working hard building this page !</span>
        <a href="/" className="btn-work"   >Back To Home</a>
      </div>
  </>
)

export default NotFoundPage
