//jshint esversion:9

import React from "react";

export default function LoginForm() {
	return (
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
	);
}
