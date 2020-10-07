//jshint esversion:9
import React from "react";

export default function LoginForm() {
	return (
		<div className="login">
			<div className="login-info-side"></div>
			<form className="form-login">
				<div className="inputs">
					<h2>Welcome back,</h2>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" className="login-inp" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input name="password" type="password" className="login-inp" />
						<label>forgot your password?</label>
					</div>
					<button type="submit">Login</button>
					<button type="submit" className=" gmail-login">
						<i className="fab fa-google fa-lg" style={{ padding: "0 5px" }}></i>
						Login with Google
					</button>
				</div>
			</form>
		</div>
	);
}
