import React from "react"

import "./ourworkcard.css"
import "../fonts/AlegreyaSans/alegreyasans.css"
import "../fonts/Slabo27px/slabo27px.css"



export default function OurWorkCard({urlImage, urlWebSite ,projectName, aboutProject, direction = "imageLeft", primaryColor,secondaryColor }) {
    var style = { "--primary-color": primaryColor,"--secondary-color": secondaryColor};
    return (
        <div className="card-container">
            <div className="card" style={direction !== "imageLeft" ? {flexDirection: 'row-reverse'}: {}} >
                <img src={urlImage} alt="Kiddie Kredit" className={direction !== "imageLeft" ? "card-img-reverse" : "card-img"  } 
                    style={ style }/>
                <div class="text-container">
                    <h1 className={"project-name"}><b>{projectName}</b></h1>
                    <p className="about-project-description">{aboutProject}</p>
                    <a target="_blank" href={urlWebSite} className="btn-work" style={ style }>View Project</a>
                </div>
            </div>
        </div>
    );
}