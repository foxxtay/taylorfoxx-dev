import React, { Component } from "react";
import { hot } from "react-hot-loader";
import NavItem from './NavItem';
import { links } from '../../data/navLinks';

const navItems = links.map((links) =>
	<NavItem title={ links.title } slug={ links.slug } key={ links.title } exact={ links.exact } />
);

class HeaderNav extends Component {
	render() {
		return(
			<nav className="HeaderNav wow fadeInRight">
				<ul>
					{ navItems }
				</ul>
			</nav>
		);
	}
}

export default hot(module)(HeaderNav);