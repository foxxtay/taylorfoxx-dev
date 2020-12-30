import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import { WOW } from 'wowjs';
import headerImg from './../../assets/img/wheelhouse-1.jpg';

class WheelhouseMedia extends Component {
	componentDidMount() {
		this.props.updateAppClass('PortfolioSingle');
		const wow = new WOW({ live: true });
		wow.init();
	}

	render() {
		return(
			<div className="portfolio-content">
				<h2 className="back-button"><Link to="/portfolio" className="logo-container wow fadeIn">&lt; back</Link></h2>
				<h1 className="wow fadeIn">Wheelhouse Media</h1>
				<h2 className="wow fadeIn" data-wow-delay="0.15s">A content studio focusing on creating original, branded content and immersive experiences.</h2>
				<div className="header-shot wow fadeIn" data-wow-delay="0.3s">
					<div>
						<img src={ headerImg } alt="Wheelhouse Media Site Layouts" />
					</div>
				</div>
				<div className="project-content wow fadeIn">
					<div className="content">
						<h2>Website Development<br />A <a href="https://www.socialdesign.house/" target="_blank">Social Design House</a> Project<br />Technical Director: Ben Visser<br />Designer: Mckenna Brandon</h2>
						<p>Wheelhouse Media has worked in collaboration with some of the biggest brand names to help create original, immersive experiences for consumers to enjoy. Working with Technical Director Ben Visser and Designer Mckenna Brandon at Social, they worked together to design an interactive website that showcases their expansive portfolio.</p><br />
						<p>For this project, we used the web platform Webflow due to its capability to quickly create fully customizable websites with custom code and complex animations. By taking advantage of the platform's animation system, we were able to deliver them a portfolio site that reflects the immersive and visually captivating qualities that they put into their work.</p><br />
						<p>To learn more about the project and the work they do, feel free to visit <a href="https://www.wheelhousemedia.tv/" target="_blank">www.wheelhousemedia.tv</a>.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default hot(module)(WheelhouseMedia);