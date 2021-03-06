//jshint esversion:9
import React from "react";
import InfoTile from "../general/InfoTile";
import populationIcon from "./../../images/icons/group.png";
import unemployRateIcon from "./../../images/icons/job.png";
import hoursOfWorkIcon from "./../../images/icons/working.png";
import underUIcon from "./../../images/icons/human-resources.png";
import minWageIcon from "./../../images/icons/save-money.png";
import { Timeline } from "react-twitter-widgets";
import { Tweet } from "react-twitter-widgets";
import unemploymentIcon from "./../../images/icons/unemployed.png";
import laborForceIcon from "./../../images/icons/employer.png";
import employmentIcon from "./../../images/icons/worker.png";
import salaryIcon from "./../../images/icons/salary (1).png";
import upIcon from "./../../images/icons/iconmonstr-arrow-74-240.png";
import downIcon from "./../../images/icons/iconmonstr-arrow-73-240.png";
import { Link } from "react-router-dom";
import Carosel1 from "../general/Carosel1";
import HomeLabourIndicDescr from "./../general/Home_labour_indic_descr";

export default function Home(props) {
	const data = {
		topDescription: {
			title: "Labour Market Indicators",
			description:
				"Labour Market Indicators are a set of key factors based on which the status of labor is accessed",
			link: "/labour-market-indicators",
		},
		titles: [
			"Labour Force Statistics",
			"Employment Statistics",
			"Unemployment Statistics",
			"Salary&Wages",
		],
		iconSize: {
			width: 40,
			height: 40,
		},
		icons: [laborForceIcon, unemploymentIcon, employmentIcon, salaryIcon],
		links: [
			"labour-market-indicators/labor-force",
			"/labour-market-indicators/employment-data",
			"labour-market-indicators/unemployment-data",
			"labour-market-indicators/salary-wages",
		],
		description: [
			"The labour force participation rate is a measure of the proportion of a country’s working-age population that engages actively in the labour market, either by working or looking for work.",
			"The employment-to-population ratio is defined as the proportion of a country’s working-age population that is employed. A high ratio means that a large proportion of the population is employed, while a low ratio means that a large share of the population is either unemployed or out of the labour force.",
			"The indicator of status in employment distinguishes between two categories of the total employed. These are: (a) wage and salaried workers (also known as employees); and (b) self-employed workers.",
			"The KILM 8 indicator is a measure of employment in the informal economy as a percentage of total non-agricultural employment. There are wide variations in definitions and methodology of data collection related to the informal economy.",
		],
	};

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
		<React.Fragment>
			<div className="home">
				<Carosel1 />
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
				<div className="body">
					<div className="body-left">
						<div className="top">
							<Link to="/labour-market-indicators">
								<h2>Labour Market Indicators</h2>
							</Link>

							<p>
								Labour Market Indicators are a set of key factors based on which
								the status of labor is accessed
							</p>
						</div>

						{data.titles.map((el, elI) => (
							<HomeLabourIndicDescr
								imgData={{
									src: `${data.icons[elI]}`,
									alt: ``,
									width: data.iconSize.width,
									height: data.iconSize.height,
								}}
								class={elI % 2 === 0 ? `left` : `right`}
								data={{
									title: el,
									link: data.links[elI],
									description: data.description[elI],
								}}
							/>
						))}
					</div>
					<div className="body-right">
						<Timeline
							dataSource={{
								sourceType: "profile",
								screenName: "TwitterDev",
							}}
							options={{
								height: "100%",
								// width: "50%",
							}}
						/>
						<Timeline
							dataSource={{
								sourceType: "profile",
								screenName: "reactjs",
							}}
							options={{
								height: "100%",
								// width: "50%",
							}}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
