import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import { WOW } from 'wowjs';
import headerLeft from './../../assets/img/senior-show-we-are-r1.gif';
import headerRight from './../../assets/img/senior-show-1.jpg';

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
				<h1 className="wow fadeIn">Winthrop Senior Show Website</h1>
				<h2 className="wow fadeIn" data-wow-delay="0.15s">A website to showcase the 2019 Winthrop Department of Design portfolio show.</h2>
				<div className="header-shot split wow fadeIn" data-wow-delay="0.3s">
					<div>
						<img src={ headerLeft } alt="Animated image of the 2019 Wintrop Senior Show Header with Animated Text" />
					</div>
					<div>
						<img src={ headerRight } alt="Image of the 2019 Winthrop Senior Show's Seniors Section on an Old Computer Monitor" />
					</div>
				</div>
				<div className="project-content wow fadeIn">
					<div className="content">
						<h2>Website Design & Development</h2>
						<p>For the Department of Design's senior portfolio show, I was tasked to create a website and landing page that both reflected the theme of the show and helped promote what would be featured at the show. Keeping true to our theme, I first designed a simple and clean landing page that included every department that would be included in the show to push our vision of coming together for the first time to host the show.</p><br />
						<p>After that was live, I used a lot of the same feel and interactivity to create our website. The website features a very simple layout that presents the event info in a way that is easy for the user to understand, but also stays true to the show's branding. There is also a level of interactivity for users to engage with in the senior section that gives them a small glimpse into each senior's personality.</p><br />
						<p>To learn more about the project and the senior show, feel free to visit <a href="https://www.winthropseniorshow.com/2019/" target="_blank">www.winthropseniorshow.com/2019/</a>.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default hot(module)(TraceyChrisSalon);