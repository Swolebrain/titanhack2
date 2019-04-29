import React from "react";
import TitleSection from "./TitleSection";

import SistemIntegrationIcon from "../images/whatwedo/systems_integration.svg"
import TechStrategyIcon from "../images/whatwedo/tech-strategy.svg";
import BussinesIntelligenceIcon from "../images/whatwedo/business_intel.svg";
import MobileAppIcon from "../images/whatwedo/mobile2.svg";
import ARIcon from "../images/whatwedo/AR.svg";
import "./cube.css";

export default class Cube extends React.Component {

	state = { currentFace: 'front' };

	transitionToFace = (toFace) => {
		if (toFace === this.state.currentFace) return;
		if (toFace === 'up' || toFace === 'down' ) {
			this.refs.theCube.classList.add('vertical');
	    } else if (this.state.currentFace === 'up' || this.state.currentFace === 'down') {		
			console.log("entras en la animacion vertical a front");	
			console.log(`spin-${this.state.currentFace}-to-front`);
			this.refs.theCube.setAttribute('style', `animation: spin-${this.state.currentFace}-to-front 0.5s 1 ease forwards, spin-front-to-${toFace} 1s 1 ease forwards`);
			this.refs.theCube.classList.remove('vertical');
			this.setState({ currentFace: toFace });
			return;
		}
		this.refs.theCube.setAttribute('style', `animation: spin-${this.state.currentFace}-to-${toFace} 1s 1 ease forwards`);
		this.setState({ currentFace: toFace });
	}

	render() {
		return (
			<><TitleSection title="What We Do" backgroundTitle="What We Do"/>
			<div className="cube-container">
		   	<div className="icons-container"> 
			  <a onClick={() => this.transitionToFace('left')}> <img className={"icons-img deg180"} src={MobileAppIcon} /></a>
				<a onClick={() => this.transitionToFace('right')}><img className={"icons-img deg135"} src={TechStrategyIcon}/></a>				
				<a onClick={() => this.transitionToFace('up')}> <img  className={"icons-img deg90"} src={BussinesIntelligenceIcon}/></a>				
				<a onClick={() => this.transitionToFace('down')}> <img className={"icons-img deg45"} src={ARIcon}/></a>
				<a onClick={() => this.transitionToFace('back')}><img className={"icons-img deg0"} src={SistemIntegrationIcon}/></a>
				</div>
				<div className="wrap">
					{/*	<div className="cube" style={this.state.activeAnimation ? { animation: 'spin-front-to-back 2s 1 ease forwards' } : { animation: 'spin-back-to-front 2s 1 ease forwards' }}>*/}
					<div className="cube" ref="theCube">
						<div className="front">
							<div className="text-container">
								<h1>OUR SERVICES</h1>
							</div>
						</div>
						<div className="back">
							<div className="text-container">
							  <h3>Systems Integrations</h3>
								<p>Automate manual work by connecting your data sources together - don't waste time manually merging data in excel any more!</p>
						    </div>
						</div>
						<div className="top">
							<div className="text-container">
							  <h3>Business Intelligence</h3>
								<p>Dashboards and data visualization to help you sail your scaling ship.</p>
							</div>
						</div>
						<div className="bottom">
							<div className="text-container">
						   	<h3>AR/VR</h3>
								<p>Use VR or Augmented Reality to lend an aura of innovation to your business.</p>
							</div>
						</div>
						<div className="left">
							<div className="text-container">
							  <h3>Mobile Apps</h3>
								<p>
								We design full fledged solutions for both Android and iOS, including highly scalable back end infrastructure.
								</p>
							</div>
						</div>
						<div className="right">
							<div className="text-container">
							<h3>Tech Strategy</h3>
								<p>
									We help define the scope of your project so that your MVP is minimal enough to fit 
									within your budget but also robust enough to gain traction.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			</>
		)
	}
}

