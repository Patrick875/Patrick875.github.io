//jshint esversion:9
import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";

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
	const legendData = useSelector((state) => state.carouselData.legendData);
	return (
		<Carousel
			responsive={responsive}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={3000}
			className="carousel-item"
			removeArrowOnDeviceType={["tablet", "mobile"]}>
			{legendData.titles.map((el, elI) => (
				<CarouselItem
					class={`item-${elI + 1}`}
					data={{
						header: legendData.titles[elI],
						text: legendData.descriptions[elI],
						buttonText: legendData.buttonTexts[elI],
					}}
				/>
			))}
		</Carousel>
	);
}

export default Carosel1;
