//jshint esversion:9
import React, { useState } from "react";
import DataElement from "../general/DataElement";
import InfoTile from "../general/InfoTile";
import Showcase from "../general/Showcase";
import populationIcon from "./../../images/icons/group.png";
import unemployRateIcon from "./../../images/icons/job.png";
import hoursOfWorkIcon from "./../../images/icons/working.png";
import underUIcon from "./../../images/icons/human-resources.png";
import minWageIcon from "./../../images/icons/save-money.png";

import upIcon from "./../../images/icons/iconmonstr-arrow-74-240.png";
import downIcon from "./../../images/icons/iconmonstr-arrow-73-240.png";
import KeyLabour from "../general/KeyLabour";

export default function Home() {
	let nfObject = new Intl.NumberFormat("en-US");
	let statusIcons = {
		upIcon: upIcon,
		downIcon: downIcon,
		backgroundColorUp: "#0F996D",
		backgroundColorDown: "#B5056C",
	};
	const population = {
		icon: populationIcon,
		number: nfObject.format(3589583),
		title: "Population of Rwanda",
		percentage: "+(0.34)",
		date: "August 2020",
	};
	const unemploymentRateByAge = {
		icon: unemployRateIcon,
		number: nfObject.format(3589583),
		title: "Unemployment Rate By Age",
		percentage: "-(0.34)",
		date: "August 2020",
	};
	const minWage = {
		icon: minWageIcon,
		number: `${nfObject.format(9.51)}%`,
		title: "Minimum Wage",
		percentage: "+(0.34)",
		date: "August 2020",
	};
	const hoursOfWork = {
		icon: hoursOfWorkIcon,
		number: nfObject.format(1589423),
		title: "Hours of Work",
		percentage: "-(0.34)",
		date: "August 2020",
	};
	const underU = {
		icon: underUIcon,
		number: `${nfObject.format(57.0)}%`,
		title: "Labour Under-utilization",
		percentage: "+(0.34)",
		date: "August 2020",
	};
	return (
		<div className="home">
			<Showcase />
			<h3>HIGHLIGHTS</h3>
			<div className="highlights">
				<div className="tiles">
					<InfoTile data={population} statusIcon={statusIcons} />
					<InfoTile data={unemploymentRateByAge} statusIcon={statusIcons} />
					<InfoTile data={minWage} statusIcon={statusIcons} />
					<InfoTile data={hoursOfWork} statusIcon={statusIcons} />
					<InfoTile data={underU} statusIcon={statusIcons} />
				</div>
			</div>
			<h3>KEY LABOUR INDICATORS</h3>
			<KeyLabour />
			<KeyLabour />
		</div>
	);
}

//population of Rwanda:3,589,583
//unemployment rate by age:3,589,583
//Minimum wage:9.51%
//hours of work:1,589,423
//labour under-utilization:57.0%
