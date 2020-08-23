import React, { Component } from "react";
import { hot } from "react-hot-loader";
import about from '../../assets/img/taylor-foxx-about.jpg';
import SocialItem from './SocialItem';
import { socialLinksData } from '../../data/socialLinks';

const socialLinks = socialLinksData.map((links) =>
	<SocialItem url={ links.url } src={ links.src } delay={ links.delay } key={ links.title } />
);

class ContactAside extends Component {
	render() {
		return(
			<div className="ContactAside">
				<img src={ about } className="wow fadeIn" />
				<div className="social-links">
					<h2 className="wow fadeIn">Social</h2>
					{ socialLinks }
				</div>
			</div>
		);
	}
}

export default hot(module)(ContactAside);