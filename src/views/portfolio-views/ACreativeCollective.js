import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import { WOW } from 'wowjs';
import headerImg from './../../assets/img/11-11-creative-1.jpg';

class ACreativeCollective extends Component {
	componentDidMount() {
		this.props.updateAppClass('PortfolioSingle');
		const wow = new WOW({ live: true });
		wow.init();
	}

	render() {
		return(
			<div className="portfolio-content">
				<h2 className="back-button"><Link to="/portfolio" className="logo-container wow fadeIn">&lt; back</Link></h2>
				<h1 className="wow fadeIn">11:11 A Creative Collective</h1>
				<h2 className="wow fadeIn" data-wow-delay="0.15s">A collective of artists hosting art and other related events across California.</h2>
				<div className="header-shot wow fadeIn" data-wow-delay="0.3s">
					<div>
						<img src={ headerImg } alt="A Creative Collective Site Layouts" />
					</div>
				</div>
				<div className="project-content wow fadeIn">
					<div className="content">
						<h2>Website Design & Development</h2>
						<p>For this project, we were tasked with choosing a type of non-profit organization to design and develop a responsive website for. 11:11 A Creative Collective is a group of artists and creatives based in the San Fernando Valley area that organizes a variety of art based events for aspiring artists and the surrounding community. To reflect their ideologies and message of spreading art throughout the community, I designed and developed a responsive website that breaks the grid as much as it creates it.</p><br />
						<p>The site was built from scratch and made to fit responsively on any device. It was designed to look clean and modern, but also take inspiration from the more "do it yourself" and experimental qualities that their events and artists hold. The brighter colors of the site and the elements that are placed outside of what would be normal in other modern sites help the design appeal to these more artistic individuals and younger audience who would be drawn to their events.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default hot(module)(ACreativeCollective);