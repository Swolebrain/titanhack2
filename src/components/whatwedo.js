import React from "react"
import TitleSection from "./TitleSection";

import  "./whatwedo.css"
import SistemIntegrationIcon from "../images/whatwedo/systems_integration.svg"
import TechStrategyIcon from "../images/whatwedo/tech-strategy.svg";
import BussinesIntelligenceIcon from "../images/whatwedo/business_intel.svg";
import MobileAppIcon from "../images/whatwedo/mobile2.svg";
import ARIcon from "../images/whatwedo/AR.svg";

export default  class WhatWeDoSection extends React.Component{
    state={
        title:"",
        textarea:"",
        texts : [
           "We design full fledged solutions for both Android and iOS, including highly scalable back end infrastructure.",
           "We help define the scope of your project so that your MVP is minimal enough to fit within your budget but also robust enough to gain traction.",
           "Dashboards and data visualization to help you sail your scaling ship.",
           "Use VR or Augmented Reality to lend an aura of innovation to your business.",
           "Automate manual work by connecting your data sources together - don't waste time manually merging data in excel any more!"
        ]
    }
    
     
    logOnMouseEnter =(titleToShow,stringToShow) =>{
        this.setState({
            title: titleToShow,
            textarea: stringToShow
        });    
    }
    
    deleteInfo =() =>{
        this.setState({
            title: "",
            textarea: ""
        });    
    }
        
        
    render(){
        return(
            <>
            <TitleSection title="What We Do" backgroundTitle="What We Do"/>
                <div className='circle-container'>     
                   
                    <a className='deg180'  onMouseEnter={()=>this.logOnMouseEnter( "Mobile Apps",this.state.texts[0])}  
                        onMouseLeave={this.deleteInfo}>
                        <img src={MobileAppIcon} />
                    </a>
                    <a  className='deg90' onMouseEnter={()=>this.logOnMouseEnter("Business Intelligence", this.state.texts[2])} onMouseLeave={this.deleteInfo}>
                         <img src={BussinesIntelligenceIcon}/>
                    </a>
                    <a className='deg135' onMouseEnter={()=>this.logOnMouseEnter("Tech Strategy", this.state.texts[1])} onMouseLeave={this.deleteInfo}>
                        <img src={TechStrategyIcon}/>
                    </a>

                    <a  className='deg45' onMouseEnter={()=>this.logOnMouseEnter("AR/VR", this.state.texts[3])} onMouseLeave={this.deleteInfo}>
                        <img src={ARIcon}/>
                    </a>
                    <a  className='deg0' onMouseEnter={()=>this.logOnMouseEnter("Systems Integrations", this.state.texts[4])} onMouseLeave={this.deleteInfo}>
                        <img src={SistemIntegrationIcon}/>
                    </a>
                    
                    <div id={"overlay"} className={"childflex blurb"}> <p>{this.state.title} </p><p className={"category-description"}>{this.state.textarea}</p></div>
                    <div id={"center"} className={"childflex"}> <p>Our Services</p></div>           
                </div>

            </>
        );
    }
}