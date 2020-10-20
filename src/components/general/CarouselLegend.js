//jshint esversion:9
import React from "react";
import CarouselButton from "./CarouselButton";

function CarouselLegend(props) {
	return (
		<div className="legend">
			<h1>{props.data.header}</h1>
			<p>{props.data.text}</p>
			<CarouselButton> {props.data.buttonText} </CarouselButton>
		</div>
	);
}

export default CarouselLegend;
