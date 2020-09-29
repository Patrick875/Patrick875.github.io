//jshint esversion:9

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backg1 from "./../../images/backg1.jpg";
import backg2 from "./../../images/backg2.jpg";
import backg3 from "./../../images/backg3.jpg";
import backg4 from "./../../images/backg4.jpg";

export default function Showcase() {
	const images = [backg1, backg2, backg3, backg4];
	const [bgImage, setBgimage] = useState(images[0]);

	useEffect(() => {
		let okay = setInterval(() => {
			if (bgImage == images[3]) {
				setBgimage(images[0]);
			} else {
				setBgimage(images[images.indexOf(bgImage) + 1]);
			}
		}, 7000);
	});

	return (
		<div
			className="showcase"
			style={{
				backgroundImage: `url(${backg1})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				transition: ".8s ease-in-out",
			}}>
			<p className="fas fa-chevron-left"></p>
			<div className="showcase-front">
				<h1>LABOUR MARKET INFORMATION SYSTEM</h1>
				<h2>GET ALL LABOUR MARKET DATA ANALYSIS IN ONE PLACE</h2>
				<Link to="/signup">
					<button>GET STARTED</button>
				</Link>
			</div>
			<p className="fas fa-chevron-right"></p>
		</div>
	);
}

/**
 * 
 * 
 * background-image: url("./images//pexels-picha-stock-3894378.jpg");
	background-size: cover;
	background-repeat: no-repeat;
Get annual population statistics with detailed information and reports - 2020
Ready to change or advance your career path? Find jobs that match your skills and expertise.
Ready to change or advance your career path? Find jobs that match your skills and expertise.
 */
