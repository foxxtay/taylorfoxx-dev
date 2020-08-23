import React, { Component } from "react";
import {hot} from "react-hot-loader";
import NavItem from './NavItem';

const links = [
	{
		title: "About",
		slug: "about"
	},
	{
		title: "Portfolio",
		slug: "portfolio"
	},
	{
		title: "Contact",
		slug: "contact"
	},
];

const navItems = links.map((links) =>
	<NavItem title={links.title} slug={links.slug} key={links.slug} />
);

class HeaderNav extends Component {
	render() {
		return(
			<nav className="HeaderNav wow fadeInRight">
				<ul>
					{navItems}
				</ul>
			</nav>
		);
	}
}

export default hot(module)(HeaderNav);