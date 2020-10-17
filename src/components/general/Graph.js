//jshint esversion:9
import React from "react";
import { Bar, Line, Chart, Doughnut } from "react-chartjs-2";

export default function Graph() {
	let options, data;
	data = {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Population of Rwanda",
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: [
					"13.5M",
					"13.6M",
					"13.67M",
					"13.7M",
					"13.72M",
					"13.72M",
					"13.73M",
					"13.8M",
					"13.82M",
					"13.9M",
					"13.9M",
				],
			},
			{
				label: "Female",
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: [
					"8.5M",
					"8.6M",
					"8.67M",
					"8.7M",
					"8.72M",
					"8.72M",
					"8.73M",
					"8.8M",
					"8.82M",
					"8.9M",
					"8.9M",
				],
			},
			{
				label: "Male",
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: [
					"5.5M",
					"5.6M",
					"5.67M",
					"5.7M",
					"5.72M",
					"5.72M",
					"5.73M",
					"5.8M",
					"5.82M",
					"5.9M",
					"5.9M",
				],
			},
		],
	};
	return (
		<div>
			<Line data={data} options={options} />
		</div>
	);
}
