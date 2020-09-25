//jshint esversion:9
import React from "react";

export default function SignUp() {
	return (
		<form className="form-login">
			<div className="inputs">
				<div>
					<label htmlFor="firstname">FirstName</label>
					<input type="text" name="firstname" className="login-inp" />
				</div>
				<div>
					<label htmlFor="lastname">LastName</label>
					<input name="lastname" type="text" className="login-inp" />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input name="email" type="email" className="login-inp" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input name="password" type="password" className="login-inp" />
				</div>
				<div>
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input name="confirmPassword" type="password" className="login-inp" />
				</div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
}
