import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Form from './ContactForm';

class ContactForm extends Component {
	render() {
		return(
			<div className="ContactForm">
				<form method="post" action="form.php">
					<div class="half-container">
						<div class="half-input">
							<input type="text" name="fullName" required />
							<h2 class="label">Full Name*</h2>
						</div>
						<div class="half-input">
							<input type="text" name="companyTitle" />
							<h2 class="label">Company Title</h2>
						</div>
					</div>
					<div class="half-container">
						<div class="half-input">
							<input type="email" name="emailAddress" required />
							<h2 class="label">E-mail Address*</h2>
						</div>
						<div class="half-input">
							<input type="tel" name="phone" />
							<h2 class="label">Phone Number</h2>
						</div>
					</div>
					<textarea name="message" required></textarea>
					<h2 class="label">Reason for inquiry / Project Description*</h2>
					<input type="submit" value="submit" />
				</form>
			</div>
		);
	}
}

export default hot(module)(ContactForm);