import React from "react"

import "./titlesection.css"
import "../fonts/Montserrat/montserrat.css"

export default function TitleSection  ({title, backgroundTitle}){
    return(
    <div className={"section-title-container"}>
        <h2 className="section-background-title">{backgroundTitle}</h2>    
        <h3 className="section-title">{title} </h3>
    </div>
)}