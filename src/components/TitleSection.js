import React from "react"

import "./titlesection.css"


export default function TitleSection  ({title, backgroundTitle}){
    return(    
    <div className={"section-title-container"}>
        <div className={"section-title-box text-background"}>  <h3 className={"text"}>{backgroundTitle}</h3>    </div>
        <div className={"section-title-box-title text-foreground"}>    <h3 className={"text"}>{title} </h3> <span className="line"/> </div>
    </div>
)}