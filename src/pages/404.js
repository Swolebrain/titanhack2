import React from "react"
import Header from "../components/header"

import CommingSoonImg from '../images/comingsoon.svg';
import "../components/404.css"

const NotFoundPage = () => (
  <>
      <div  className={"ornament ornament-top-left"} />
      <div className={"ornament ornament-middle-left"} />
      <div className={"ornament ornament-middle-right"} />
      <div className={"ornament ornament-bottom-right"} />
      
      <Header siteTitle="titanhack"/>
      <div className={"main-container"}>
        <img src= {CommingSoonImg} alt="pc hero" className={"working-img"}/> 
        <h1>Coming Soon</h1>
        <span className={"paragraph-subtitle"}>Titanhack is currently working hard building this page !</span>
        <a href="/" className="btn-work btn-shadow">Back To Home</a>
      </div>
      
  </>
)

export default NotFoundPage
