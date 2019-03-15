import React from "react"

import "./ourworkcard.css"
import "../fonts/AlegreyaSans/alegreyasans.css"


export default function OurWorkCard({urlImage, projectName, aboutProject, direction = "imageLeft"}) {
    return (
        <div className="card-container">
            <div className="card" style={direction !== "imageLeft" ? {flexDirection: 'row-reverse'}: {}}>
                <img src={urlImage} alt="Kiddie Kredit"/>
                <div class="container">
                    <h1><b>{projectName}</b></h1>
                    <p>{aboutProject}</p>
                    <a href="" className="btn-work">View Project</a>
                </div>
            </div>
        </div>
    );
}