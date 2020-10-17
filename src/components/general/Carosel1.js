//jshint esversion:9
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carosel1() {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<Carousel responsive={responsive} infinite={true} autoPlay={true}>
			<div className="item-1">
				<div className="legend">
					<h1>Welcome to LMIS</h1>
					<p>LABOUR MARKET INFORMATION SYSTEM </p>

					<button>GET STARTED</button>
				</div>
			</div>

			<div className="item-2">
				<div className="legend">
					<h1>Get deep analysis</h1>
					<p>
						View the data in different ways to get deep understanding of what's
						happening
					</p>
					<button>VIEW OUR RESOURCES</button>
				</div>
			</div>

			<div className="item-3">
				<div className="legend">
					<h1>Be part of us</h1>
					<p>
						Get even more power signing up so that you can download, customize
						and upload data on this platform
					</p>
					<button>SIGNUP/LOGIN</button>
				</div>
			</div>
		</Carousel>
	);
}

export default Carosel1;
