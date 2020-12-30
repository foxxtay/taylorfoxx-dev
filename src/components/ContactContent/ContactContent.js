import React, { Component } from "react";
import { hot } from "react-hot-loader";

class ContactContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<section className="ContactContent">
				<div>
					<h1>Contact me for any inquiries.</h1>
					<h2>Fill out the form below or feel free to contact me at <a href="mailto:hello@taylorfoxx.dev">hello@taylorfoxx.dev</a>.</h2>
					<div className="contact-form">
						<form name="contact" method="post" action="/thank-you">
							<input type="hidden" name="form-name" value="contact" />
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