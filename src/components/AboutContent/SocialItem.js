import React, { Component } from "react";
import { hot } from "react-hot-loader";
import about from '../../assets/img/taylor-foxx-about.jpg';

class ContactAside extends Component {
	render() {
		return(
			<a className="SocialItem wow fadeIn" href={ this.props.url } target="_blank" data-wow-delay={ this.props.delay }>
				<img src={ this.props.src } />
			</a>
		);
	}
}

export default hot(module)(ContactAside);