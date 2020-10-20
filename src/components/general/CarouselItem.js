//jshint esversion:9

import React from "react";
import CarouselLegend from "./CarouselLegend";

function CarouselItem(props) {
	return (
		<div className={`${props.class}`}>
			<CarouselLegend data={props.data} />
		</div>
	);
}

export default CarouselItem;
