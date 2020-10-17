//jshint esversion:9
import React from "react";
import logo from "./../../images/SNOWWHITE LMIS-2 copy.png";

export default function SignUp() {
	return (
		<div className="sign-up">
			<div className="signup-text">
				<p>Get Accurate,Precise and Update info about Labour force</p>
			</div>
			<form className="form-login">
				<div className="inputs">
					<h2>Sign up to LMIS</h2>
					<div>
						<label htmlFor="firstname">First name</label>
						<input type="text" name="firstname" className="login-inp" />
					</div>
					<div>
						<label htmlFor="lastname">Last name</label>
						<input name="lastname" type="text" className="login-inp" />
					</div>
					<div style={{ margin: "1em 0" }}>
						<label
							htmlFor="gender"
							style={{ display: "inline-block", paddingRight: " 1em " }}>
							Gender
						</label>
						<select
							name="gender"
							style={{
								border: "none",
								background: "transparent",
								margin: "1em 0",
								border: "1px solid black",
							}}>
							<option value="default">--select option--</option>
							<option value="Female">Female</option>
							<option value="Male">Male</option>
							<option value="Other">Other</option>
						</select>
					</div>
					<div>
						<label htmlFor="profession">profession</label>
						<input name="profession" type="text" className="login-inp" />
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
						<input
							name="confirmPassword"
							type="password"
							className="login-inp"
						/>
					</div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}
