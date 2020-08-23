import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import { WOW } from 'wowjs';
import headerImg from './../../assets/img/locus-1.jpg';

class LocusApp extends Component {
	componentDidMount() {
		this.props.updateAppClass('PortfolioSingle');
		const wow = new WOW({ live: true });
		wow.init();
	}

	render() {
		return(
			<div className="portfolio-content">
				<h2 className="back-button"><Link to="/portfolio" className="logo-container wow fadeIn">&lt; back</Link></h2>
				<h1>Locus App</h1>
				<h2>An application for friends to find each other and link up using enhanced AR capabilities.</h2>
				<div className="header-shot">
					<div>
						<img src={ headerImg } />
					</div>
				</div>
				<div className="project-content">
					<div className="content">
						<h2>UI/UX App Design</h2>
						<p>For this project, we were given a problem and set of parameters that the application must meet. By using the IPhone X's enhanced AR capabilities, I was to design the user interface and experience for an application to help users find their friends and keep in track with them, no matter where they were. This led to the creation of Locus.</p><br />
						<p>By moving the phone around in a 3D space, you would be able to see where your friends are in your group by taking advantage of the simplistic compass that moves you in the direction of where your friends are currently. You are also given the capabilities to ping your group to come to you or ping, call, and text individual friends by selecting their pin on the compass. When you select your friends, you will also be given a map of where they are and their most recent status update to let you friends know where and what you are doing.</p><br />
						<p>To learn more about this project and the process of designing this interface, feel free to see the full presentation on <a href="https://www.behance.net/gallery/59657299/Locus-the-App-Finding-your-Friends-through-AR" target="_blank">Behance</a>.</p>
					</div>
					{/* <iframe width="442" height="935" src="//invis.io/YHRAHI7PUJM" frameborder="0" allowfullscreen></iframe> */}
				</div>
			</div>
		);
	}
}

export default hot(module)(LocusApp);