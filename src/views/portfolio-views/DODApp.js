import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import { WOW } from 'wowjs';
import headerImg from './../../assets/img/dod-2.jpg';

class DODApp extends Component {
	componentDidMount() {
		this.props.updateAppClass('PortfolioSingle');
		const wow = new WOW({ live: true });
		wow.init();
	}

	render() {
		return(
			<div className="portfolio-content">
				<h2 className="back-button"><Link to="/portfolio" className="logo-container wow fadeIn">&lt; back</Link></h2>
				<h1>DOD App</h1>
				<h2>An application created to promote and create a community within the Department of Design at Winthrop University.</h2>
				<div className="header-shot">
					<div>
						<img src={ headerImg } />
					</div>
				</div>
				<div className="project-content">
					<div className="content">
						<h2>UI/UX App Design & Problem Solving<br />Collaborators: The Lovely <a href="https://www.kaitlynblackman.com/" target="_blank">Kaitlyn Blackman</a></h2>
						<p>For this project, Kaitlyn Blackman and I were given the problem of fixing the disconnect between students within the Department of Design at Winthrop University and build a strong community. Through gathering information from students within the Department and learning more about what prohibits them from coming to the design club meetings and working together with both upper and underclassman, we realized we need to give them an easily accessible place to come together and discuss important aspects of the department. Which led us to design the Department of Design application.</p><br />
						<p>This application takes four important aspects that we discovered in our research and gives them each a section for students within the Department to discuss and use to build a stronger community. Those sections include communication, critiquing, planning, and personal identity. By taking these concepts and giving students an easily accessable platform to discuss these topics, we expect an actively used community that creates dialogue and awareness throughout the Department.</p><br />
						<p>To learn more about this project and the process of creating this concept, feel free to see the full presentation on <a href="https://www.behance.net/gallery/58814409/DOD-A-Community" target="_blank">Behance</a>.</p>
					</div>
					{/* <iframe width="438" height="930" src="//invis.io/Q5RAHLLPY4J" frameborder="0" allowfullscreen></iframe> */}
				</div>
			</div>
		);
	}
}

export default hot(module)(DODApp);