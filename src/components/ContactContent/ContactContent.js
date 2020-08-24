import React, { Component } from "react";
import { hot } from "react-hot-loader";
import emailjs from 'emailjs-com';

class ContactContent extends Component {
	constructor(props) {
		super(props);

		this.state = { emailAttempt:false, emailSent: false, pageHead: "Contact me for any inquiries.", pageMsg: "Fill out the form below or feel free to contact me at" };
		this.sendEmail = this.sendEmail.bind(this);
	}

	sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('webmail', 'contact_form', e.target, 'user_b75JdYWiwUTBLYNrRl6YF')
		.then((result) => {
			this.setState({
				emailAttempt: true,
				emailSent: true,
				pageHead: "Message Sent.",
				pageMsg: "Thank you for the inquiry. I will get back to you as soon as possible. If you have any other questions or more pressing concerns, feel free to contact me at"
			});
		}, (error) => {
			this.setState({
				emailAttempt: true,
				emailSent: false,
				pageHead: "Error Sending Message.",
				pageMsg: "Something's gone wrong on my end! Sorry for the inconvenience. Try again or feel free to contact me directly at"
			});
		});
	}

	render() {
		return(
			<section className="ContactContent">
				<div className={ this.emailSent }>
					<h1>{ this.state.pageHead }</h1>
					<h2>{ this.state.pageMsg } <a href="mailto:hello@taylorfoxx.dev">hello@taylorfoxx.dev</a>.</h2>
					<div className={ this.state.emailAttempt ? "contact-form hidden" : "contact-form" }>
						<form method="post" onSubmit={ this.sendEmail }>
							<div className="half-container">
								<div className="half-input">
									<input type="text" name="user_name" required />
									<h2 className="label">Full Name*</h2>
								</div>
								<div className="half-input">
									<input type="text" name="company_name" />
									<h2 className="label">Company Title</h2>
								</div>
							</div>
							<div className="half-container">
								<div className="half-input">
									<input type="email" name="user_email" required />
									<h2 className="label">E-mail Address*</h2>
								</div>
								<div className="half-input">
									<input type="tel" name="user_phone" />
									<h2 className="label">Phone Number</h2>
								</div>
							</div>
							<textarea name="message" required></textarea>
							<h2 className="label">Reason for inquiry / Project Description*</h2>
							<input type="submit" value="submit" />
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default hot(module)(ContactContent);