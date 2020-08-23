import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import { WOW } from 'wowjs';
import headerLeft from './../../assets/img/tracey-chris-1.jpg';
import headerRight from './../../assets/img/tracey-chris-2-r1.gif';

class TraceyChrisSalon extends Component {
	componentDidMount() {
		this.props.updateAppClass('PortfolioSingle');
		const wow = new WOW({ live: true });
		wow.init();
	}

	render() {
		return(
			<div className="portfolio-content">
				<h2 className="back-button"><Link to="/portfolio" className="logo-container wow fadeIn">&lt; back</Link></h2>
				<h1>TraceyChris Salon</h1>
				<h2>A salon local to Rock Hill that rides the line of modern and high-end beauty.</h2>
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
						<h2>Branding, Website Design, & Development</h2>
						<p>TraceyChris Salon is all about bringing high quality hair service local to Rock Hill, SC. With their mastery, vision, and hair care system, we began to collaborate on a branding that reflected their vision of bringing high-quality hair treatment to Rock Hill. The logo, simplistic, sleek, and modern, gives what would be your local, ordinary salon branding an edge so clients can know what to expect when they walk in the door.</p><br />
						<p>The website I developed for them also reflects their ideals in being simple, yet clean and modern. By using both custom Javascript and HTML alongside the web platform Webflow, I developed a website that would be give the client full control of the site's content after it was live.</p><br />
						<p>To learn more about the project and possibly book an appointment, feel free to visit <a href="https://www.traceychrissalon.com/" target="_blank">www.traceychrissalon.com</a>.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default hot(module)(TraceyChrisSalon);