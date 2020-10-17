//jshint esversion:9
import React from "react";
import logo from "./../../images/SNOWWHITE LMIS-2 copy.png";
import fcbkIcon from "./../../images/icons/iconmonstr-facebook-3-240.png";
import twitterIcon from "./../../images/icons/iconmonstr-twitter-1-240.png";
import linkedinIcon from "./../../images/icons/iconmonstr-linkedin-3-240.png";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-top">
				<div className="footer-logo">
					<img src={logo} alt="LMIS logo" height="120" width="120" />
				</div>
				<div className="footer-icons">
					<p>Follow us on</p>
					<div className="footer-icons-img">
						<img src={fcbkIcon} alt="facebook icon" width="30" height="30" />
						<img src={twitterIcon} alt="twitter icon" width="30" height="30" />
						<img
							src={linkedinIcon}
							alt="linkedIn icon"
							width="30"
							height="30"
						/>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<ul>
					<li>ILO</li>
					<li>NISR</li>
					<li>RDB</li>
					<li>PRIVACY NOTICE</li>
					<li>Terms of Use</li>
					<li className="copyright">
						COPYRIGHT &copy; {new Date().getFullYear()}
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Footer;
