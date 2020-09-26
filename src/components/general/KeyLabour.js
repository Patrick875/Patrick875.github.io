//jshint esversion:9

import React from "react";
import DataElement from "./../general/DataElement";
import { Link } from "react-router-dom";
export default function KeyLabour() {
	let nfObject = new Intl.NumberFormat("en-US");
	const population = {
		number: nfObject.format(3589583),
		title: "Population of Rwanda",
		percentage: "+(0.34)",
		date: "August 2020",
	};
	const unemploymentRateByAge = {
		number: nfObject.format(3589583),
		title: "Unemployment Rate By Age",
		percentage: "-(0.34)",
		date: "August 2020",
	};
	const minWage = {
		number: `${nfObject.format(9.51)}%`,
		title: "Minimum Wage",
		percentage: "+(0.34)",
		date: "August 2020",
	};
	const hoursOfWork = {
		number: nfObject.format(1589423),
		title: "Hours of Work",
		percentage: "-(0.34)",
		date: "August 2020",
	};
	const underU = {
		number: `${nfObject.format(57.0)}%`,
		title: "Labour Under-utilization",
		percentage: "+(0.34)",
		date: "August 2020",
	};
	return (
		<div className="key-labour">
			<h3>POPULATION STATISTICS</h3>
			<DataElement
				title={{ title: population.title, number: population.number }}>
				Sunlight reaches Earth's atmosphere and is scattered in all directions
				by all the gases and particles in the air. Blue light is scattered more
				than the other colors because it travels as shorter, smaller waves. This
				is why we see a blue sky most of the time.
				<ul>
					<li>
						<Link to="#">read more</Link>
					</li>
					<li>
						<Link to="#">source</Link>
					</li>
				</ul>
			</DataElement>
			<DataElement
				title={{
					title: unemploymentRateByAge.title,
					number: unemploymentRateByAge.number,
				}}>
				It's really hot inside Jupiter! No one knows exactly how hot, but
				scientists think it could be about 43,000°F (24,000°C) near Jupiter's
				center, or core.
				<ul>
					<li>
						<Link to="#">read more</Link>
					</li>
					<li>
						<Link to="#">source</Link>
					</li>
				</ul>
			</DataElement>
			<DataElement title={{ title: minWage.title, number: minWage.number }}>
				It's really hot inside Jupiter! No one knows exactly how hot, but
				scientists think it could be about 43,000°F (24,000°C) near Jupiter's
				center, or core.
				<ul>
					<li>
						<Link to="#">read more</Link>
					</li>
					<li>
						<Link to="#">source</Link>
					</li>
				</ul>
			</DataElement>
			<DataElement
				title={{ title: hoursOfWork.title, number: hoursOfWork.number }}>
				A black hole is an area of such immense gravity that nothing -- not even
				light -- can escape from it.
				<ul>
					<li>
						<Link to="#">read more</Link>
					</li>
					<li>
						<Link to="#">source</Link>
					</li>
				</ul>
			</DataElement>
			<DataElement title={{ title: underU.title, number: underU.number }}>
				A black hole is an area of such immense gravity that nothing -- not even
				light -- can escape from it.
				<ul>
					<li>
						<Link to="#">read more</Link>
					</li>
					<li>
						<Link to="#">source</Link>
					</li>
				</ul>
			</DataElement>
			<DataElement
				title={{ title: population.title, number: population.number }}>
				A black hole is an area of such immense gravity that nothing -- not even
				light -- can escape from it.
				<ul>
					<li>
						<Link to="#">read more</Link>
					</li>
					<li>
						<Link to="#">source</Link>
					</li>
				</ul>
			</DataElement>
		</div>
	);
}
