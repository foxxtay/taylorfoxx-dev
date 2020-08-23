import React, { Component } from "react";
import {hot} from "react-hot-loader";
import logo from '../../assets/img/taylor-foxx-icon.svg';
import Content from './Content';
import ContactAside from './ContactAside';

class ContentAbout extends Component {
	render() {
		return(
			<section className="ContentAbout">
				<Content />
				<ContactAside />
			</section>
		);
	}
}

export default hot(module)(ContentAbout);