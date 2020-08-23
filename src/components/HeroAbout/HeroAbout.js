import React, { Component } from "react";
import {hot} from "react-hot-loader";
import logo from '../../assets/img/taylor-foxx-icon.svg';

class HeroAbout extends Component {
	render() {
		return(
			<section className="HeroAbout">
				<h1 className="wow fadeIn">Hello.<br/>My name is <span>Taylor Foxx</span>. I am an <span>Interactive Media Designer</span> and <span>Developer</span>.</h1>
				<div className="logo wow fadeIn">
					<img src={logo} />
				</div>
			</section>
		);
	}
}

export default hot(module)(HeroAbout);