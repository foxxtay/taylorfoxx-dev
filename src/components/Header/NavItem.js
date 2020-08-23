import React, { Component } from "react";
import {hot} from "react-hot-loader";
import {NavLink} from "react-router-dom";

class NavItem extends Component {
	render() {
		return(
			<li className="NavItem">
				<NavLink to={this.props.slug} activeClassName="active" exact>{this.props.title}</NavLink>
			</li>
		);
	}
}

export default hot(module)(NavItem);