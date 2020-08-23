import React, { Component } from "react";
import {hot} from "react-hot-loader";

class NavItem extends Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
		this.setActive = this.setActive.bind(this);
	}

	setActive() {
		this.setState({
			active: true
		});
	}

	render() {
		return(
			<li className={this.state.active ? "NavItem active" : "NavItem" }>
				<a href={this.props.slug} onClick={this.setActive}>{this.props.title}</a>
			</li>
		);
	}
}

export default hot(module)(NavItem);