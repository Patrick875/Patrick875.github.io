//jshint esversion:9

import React from "react";
import backg from "./../../images/login-backg.jpg";

export default function LoginForm() {
	return (
		<div className="login">
			<div
				className="login-info-side"
				style={{ backgroundImage: `url(${backg})` }}>
				<p>LMIS much more features</p>
				<p>Sign in to unreash the full potential</p>
			</div>
			<div className="login-form1">
				<form className="form-login">
					<div className="inputs">
						<div>
							<label htmlFor="email">Email</label>
							<input type="email" name="email" className="login-inp" />
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input name="password" type="password" className="login-inp" />
						</div>
						<button type="submit">Login</button>
					</div>
				</form>
			</div>
		</div>
	);
}
