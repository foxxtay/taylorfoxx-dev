import React, { Component } from "react";
import {hot} from "react-hot-loader";
import about from '../../assets/img/taylor-foxx-about.jpg';
import dribble from '../../assets/img/dribbble-logo.svg';
import instagram from '../../assets/img/ig-logo.svg';
import linkedIn from '../../assets/img/linkedin-logo.svg';
import twitter from '../../assets/img/twitter-logo.svg';
import SocialItem from './SocialItem';

const links = [
	{
		title: "dribble",
		url: "https://dribbble.com/taylorfoxx",
		src: dribble,
		delay: "0.25s"
	},
	{
		title: "instagram",
		url: "https://www.instagram.com/foxx.tay/",
		src: instagram,
		delay: "0.5s"
	},
	{
		title: "linkedIn",
		url: "https://www.linkedin.com/in/william-foxx-747927145/",
		src: linkedIn,
		delay: "0.75s"
	},
	{
		title: "twitter",
		url: "https://twitter.com/foxx_tay",
		src: twitter,
		delay: "1s"
	},
];

const socialLinks = links.map((links) =>
	<SocialItem url={links.url} src={links.src} delay={links.delay} key={links.title} />
);

class ContactAside extends Component {
	render() {
		return(
			<div className="ContactAside">
				<img src={about} className="wow fadeIn" />
				<div className="social-links">
					<h2 className="wow fadeIn">Social</h2>
					{socialLinks}
				</div>
			</div>
		);
	}
}

export default hot(module)(ContactAside);