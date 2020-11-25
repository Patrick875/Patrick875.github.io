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
import svg from "./../../images/Group 65.svg";
export default function Home(props) {
	return (
		<div className="homepage">
			<div className="header_svg_display">
				<div className="header_svg_display_text">
					<h2>Data Analysis Tool For Everyone</h2>
					<p>
						Find the latest statistics, reports, surveys and data revolution of
						the labour market in Rwanda
					</p>
					<input placeholder="Search Data" className="header_search" />
				</div>
				<div className="header_svg_img">
					<img src={svg} alt="good_art" />
				</div>
			</div>
			<div className="homepage__tiles">
				<div className="homepage__tile">
					<p>13,589,583</p>
					<p>Total Population of Rwanda</p>
					<img src={populationIcon} alt="many people icon" />
					<img src={upIcon} alt="upwards icon" className="statusIcon" />
					<p className="percentage">+0.34%</p>
					<p className="date">August 2020</p>
				</div>
				<div className="homepage__tile">
					<p>13,589,583</p>
					<p>Total Population of Rwanda</p>
					<img src={populationIcon} alt="many people icon" />
					<img src={upIcon} alt="upwards icon" className="statusIcon" />
					<p className="percentage">+0.34%</p>
					<p className="date">August 2020</p>
				</div>
				<div className="homepage__tile">
					<p>13,589,583</p>
					<p>Total Population of Rwanda</p>
					<img src={populationIcon} alt="many people icon" />
					<img src={upIcon} alt="upwards icon" className="statusIcon" />
					<p className="percentage">+0.34%</p>
					<p className="date">August 2020</p>
				</div>
				<div className="homepage__tile">
					<p>13,589,583</p>
					<p>Total Population of Rwanda</p>
					<img src={populationIcon} alt="many people icon" />
					<img src={upIcon} alt="upwards icon" className="statusIcon" />
					<p className="percentage">+0.34%</p>
					<p className="date">August 2020</p>
				</div>
			</div>
			<button> explore more</button>
			<div className="homepage__lmi">
				<p>Labour Market Indicators</p>
				<div className="homepage__lmi__table">
					<div className="homepage__lmi__table__head"></div>
					<div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
}
