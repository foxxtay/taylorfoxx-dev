import React, { Component } from "react";
import {hot} from "react-hot-loader";
import logo from '../../assets/img/taylor-foxx-icon.svg';
import Nav from './HeaderNav';
import {Link} from "react-router-dom";

class Header extends Component {
	render() {
		return(
			<header className="Header">
				<Link to="/" className="logo-container wow fadeIn">
					<img src={logo}/>
				</Link>
				<Nav />
			</header>
		);
	}
}

export default hot(module)(Header);