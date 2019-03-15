import React from "react"

import  "./ourworkcard.css"
import "../fonts/AlegreyaSans/alegreyasans.css"

export default class OurWorkCard extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="card-container"> 
            <div className="card">
                <img src = {this.props.urlImage} alt="Kiddie Kredit" /> 
                 <div class="container">
                   <h1><b>{this.props.projectName}</b></h1> 
                   <p>{this.props.aboutProject}</p> 
                   <a href="" className="btn-work">View Project</a>
                 </div>
            </div>
            </div>
        );
    }

}