//jshint esversion:9

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import backg1 from "./../../images/backg1.jpg";
import backg2 from "./../../images/backg2.jpg";
import backg3 from "./../../images/backg3.jpg";
import backg4 from "./../../images/backg4.jpg";
import backg5 from "./../../images/backg5.jpg";

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
		<div className="not-cool">
			<Carousel
				interval="4500"
				showThumbs=""
				showStatus=""
				dynamicHeight={true}
				autoPlay={true}
				transitionTime="400"
				infiniteLoop={true}
				className="sawa-sawa-sawa">
				<div className="not-funny">
					<div className="crazy-crazy ">
						<img src={backg1} className="cool-img" />
					</div>
				</div>
				<div className="not-funny">
					<div className="crazy-crazy">
						<img src={backg2} className="cool-img" alt="sawa" />
					</div>
				</div>
				<div className="not-funny">
					<div className="crazy-crazy">
						<img src={backg3} className="cool-img" />
					</div>
				</div>
			</Carousel>
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

//  <p className="legend">Legend 1</p>
// 	<p className="legend">Legend 2</p>
// <p className="legend">Legend 3</p>

// <Link to="/signup">
// 	<button>GET STARTED</button>
// </Link>;

// className = "showcase-front";
