import React from "react"

import "./titlesection.css"
import "../fonts/Montserrat/montserrat.css"

export default function TitleSection  ({title, backgroundTitle}){
    return(    
    <div className={"container"}>
        <div className={"box text-background"}>  <h3 className={"text"}>{backgroundTitle}</h3>    </div>
        <div className={"box-title text-foreground"}>    <h3 className={"text"}>{title} </h3> <span className="line"></span>       </div>
    </div>
)}