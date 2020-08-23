import React, { Component } from "react";
import {hot} from "react-hot-loader";
import logo from '../../assets/img/taylor-foxx-icon.svg';
import Nav from './HeaderNav';

class Header extends Component {
	render() {
		return(
			<header className="Header">
				<a className="logo-container wow fadeIn">
					<img src={logo}/>
				</a>
				<Nav />
			</header>
		);
	}
}

export default hot(module)(Header);