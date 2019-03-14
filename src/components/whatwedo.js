import React from "react"

import  "./whatwedo.css"

export default  class WhatWeDoSection extends React.Component{
    state={
        textarea:"",
        texts : [
           "We design full fledged solutions for both Android and iOS, including highly scalable back end infrastructure",
           "We help define the scope of your project so that your MVP is minimal enough to fit within your budget but also robust enough to gain traction",
           "dashboards and data visualization to help you sail your scaling ship",
           "Use VR or Augmented Reality to lend an aura of innovation to your business",
           "automate manual work by connecting your data sources together - don't waste time manually merging data in excel any more!"
        ]
    }
    
     
    
    logOnMouseEnter =(stringToShow) =>{
        this.setState({
            textarea: stringToShow
        });    
    }
    
    logOnMouseLeave =() =>{
        this.setState({
            textarea: ""
        });   
    }
    
    render(){
        return(
            <div class="spacers">
                <div className='circle-container '>
                    <p className='center'>{this.state.textarea}</p>
                    <a href='' className='deg0' onMouseEnter={()=>this.logOnMouseEnter( this.state.texts[0])} onMouseLeave={this.logOnMouseLeave}>
                        <img src='https://img.icons8.com/flat_round/64/000000/share.png' />
                    </a>
                    <a href='' className='deg45' onMouseEnter={()=>this.logOnMouseEnter( this.state.texts[1])} onMouseLeave={this.logOnMouseLeave}>
                        <img src='https://img.icons8.com/flat_round/64/000000/share.png' />
                    </a>
                     <a href='' className='deg90' onMouseEnter={()=>this.logOnMouseEnter( this.state.texts[2])} onMouseLeave={this.logOnMouseLeave}>
                         <img src='https://img.icons8.com/flat_round/64/000000/share.png'/>
                    </a>
                    <a href='' className='deg135' onMouseEnter={()=>this.logOnMouseEnter( this.state.texts[3])} onMouseLeave={this.logOnMouseLeave}>
                        <img src='https://img.icons8.com/flat_round/64/000000/share.png'/>
                    </a>
                    <a href='' className='deg180' onMouseEnter={()=>this.logOnMouseEnter( this.state.texts[4])} onMouseLeave={this.logOnMouseLeave}>
                        <img src='https://img.icons8.com/flat_round/64/000000/share.png'/>
                    </a>
                   

                </div>
            </div>
        );
    }
}