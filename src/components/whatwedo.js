import React from "react";
import TitleSection from "./TitleSection";

import SistemIntegrationIcon from "../images/whatwedo/systems_integration.svg"
import TechStrategyIcon from "../images/whatwedo/tech-strategy.svg";
import BussinesIntelligenceIcon from "../images/whatwedo/business_intel.svg";
import MobileAppIcon from "../images/whatwedo/mobile2.svg";
import ARIcon from "../images/whatwedo/AR.svg";
import "./whatwedo.css";

export default class Cube extends React.Component {

	state = { currentFace: 'front' };

	transitionToFace = (toFace) => {
		if (toFace === this.state.currentFace) {
			if (document.activeElement !== document.body) document.activeElement.blur();
			toFace = 'front';
		}
	
		if (this.state.currentFace === 'up' || this.state.currentFace === 'down') {
			setTimeout(()=>{
				this.refs.theCube.classList.remove('vertical');
			},  toFace === 'front' ?  2000:750 );
		} else if(this.state.currentFace === 'front' && (toFace === 'up' || toFace === 'down') ){
				this.refs.theCube.classList.add('vertical');	
		}

		this.refs.theCube.setAttribute('style', `animation: spin-${this.state.currentFace}-to-${toFace} 1.5s ease forwards`);
		
		if (toFace === 'up' || toFace === 'down') {
			setTimeout(()=>{
				this.refs.theCube.classList.add('vertical');
			},750);
		}		
		this.setState({ currentFace: toFace });
	}

	render() {
		return (
			<>
			<TitleSection title="What We Do" backgroundTitle="What We Do" />
				<div className="cube-container">
					<div className="icons-container">
						<div onClick={() => this.transitionToFace('left')} > <img alt="Mobile Apps" className={"icons-img deg180"} src={MobileAppIcon} tabIndex="0"/></div>
						<div onClick={() => this.transitionToFace('right')}><img alt="Tech Strategy" className={"icons-img deg135"} src={TechStrategyIcon} tabIndex="1"/></div>
						<div onClick={() => this.transitionToFace('up')} > <img alt="Bussiness Intelligence" className={"icons-img deg90"} src={BussinesIntelligenceIcon} tabIndex="2"/></div>
						<div onClick={() => this.transitionToFace('down')} > <img alt="AR/VR" className={"icons-img deg45"} src={ARIcon} tabIndex="3"/></div>
						<div onClick={() => this.transitionToFace('back')} ><img alt="System Integration" className={"icons-img deg0"} src={SistemIntegrationIcon} tabIndex="4"/></div>			
					</div>
					<div className="wrap">
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

