import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Form from './ContactForm';

class ContactContent extends Component {
	render() {
		return(
			<section className="ContactContent">
				<h1>Contact me for any inquiries.</h1>
				<h2>Fill out the form below or feel free to contact me at <a href="mailto:hello@taylorfoxx.dev">hello@taylorfoxx.dev</a>.</h2>
				<Form />
			</section>
		);
	}
}

export default hot(module)(ContactContent);