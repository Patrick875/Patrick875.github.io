//jshint esversion:9
import React, { useState } from "react";
import axios from "axios";
export default function Login() {
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		const { value, name } = e.target;
		setLoginForm({ ...loginForm, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		e.target.reset();
		console.log(loginForm);
	};
	return (
		<div className="login">
			<div className="login-info-side"></div>
			<form
				className="form-login"
				action=""
				method="POST"
				onSubmit={handleSubmit}>
				<div className="inputs">
					<h2>Welcome back,</h2>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							className="login-inp"
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							name="password"
							type="password"
							className="login-inp"
							onChange={handleChange}
						/>
						<label>forgot your password?</label>
					</div>
					<button type="submit" onSubmit={handleSubmit}>
						Login
					</button>
					<button type="submit" className=" gmail-login">
						<i className="fab fa-google fa-lg" style={{ padding: "0 5px" }}></i>
						Login with Google
					</button>
				</div>
			</form>
		</div>
	);
}
