import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import { WOW } from 'wowjs';
import headerLeft from './../../assets/img/hoopaugh-2-r3.gif';
import headerRight from './../../assets/img/hoopaugh-1.jpg';

class aCreativeCollective extends Component {
	componentDidMount() {
		this.props.updateAppClass('PortfolioSingle');
		const wow = new WOW({ live: true });
		wow.init();
	}

	render() {
		return(
			<div className="portfolio-content">
				<h2 className="back-button"><Link to="/portfolio" className="logo-container wow fadeIn">&lt; back</Link></h2>
				<h1>Hoopaugh Grading Company</h1>
				<h2>A grading company that takes pride in their work and safety prodcedures in delivering a variety of turn-key site work packages.</h2>
				<div className="header-shot split">
					<div>
						<img src={ headerLeft } />
					</div>
					<div>
						<img src={ headerRight } />
					</div>
				</div>
				<div className="project-content">
					<div className="content">
						<h2>Website Development<br />A <a href="https://www.socialdesign.house/" target="_blank">Social Design House</a> Project<br />Technical Director: Ben Visser<br />Designer: Mckenna Brandon</h2><p>Hoopaugh Grading Company works hard and with the best to deliver specialized turn-key site work packages for any large scale industrial, commercial, and residential needs. When they came to Social Design House for their new website, Technical Director Ben Visser and Designer Mckenna Brandon delivered a clean, responsive website that reflects the core values and practices they take pride in.</p><br />
						<p>Given a short deadline to fit their needs, we decided to develop the site using the platform Webflow. By using this platform, we were able to deliver them a fully customizable site, with custom Javascript and HTML functionality, in a short timeline. Once the site was pushed live, the client was given access to all of the site's content and features without having to mess with any code.</p><br />
						<p>To learn more about the project and the projects they've worked on, feel free to visit <a href="https://www.hoopaughgrading.com/" target="_blank">www.hoopaughgrading.com</a>.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default hot(module)(aCreativeCollective);