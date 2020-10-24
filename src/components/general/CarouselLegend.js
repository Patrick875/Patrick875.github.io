//jshint esversion:9
import React from "react";
import CarouselButton from "./CarouselButton";

function CarouselLegend(props) {
	const text = props.data.text.split(".");
	return (
		<div className="legend">
			<h1>{props.data.header}</h1>
			{text.map((el) => (
				<p>{el}</p>
			))}
			<CarouselButton> {props.data.buttonText} </CarouselButton>
		</div>
	);
}

export default CarouselLegend;
