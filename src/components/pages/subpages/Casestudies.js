//jshint esversion:9
import React from "react";
import axios from "axios";
import download from "downloadjs";
import ResourcesDataCard from "../../general/Resources_data_card";

function Casestudies(props) {
	const handleDownload = () => {
		axios
			.get("./docs/Youth_and_total_unemployment_rate_The_impact_of_po.pdf", {
				responseType: "blob",
			})
			.then((response) => {
				download(response.data, "file.pdf", "application/pdf");
			})
			.catch((error) => console.log(`DOWNLOAD ERROR \n ${error}`));
	};
	const caseStudies = {
		imgData: {
			alt: "Searching Icon",
		},
		title: [
			"Factors for Youth unemployment",
			"Women unemployment in Rwanda",
			"Rural Vs Urban salaries and wages gap",
			"Payment Rates by Gender",
			"Factors for Youth unemployment",
			"Women unemployment in Rwanda",
			"Rural Vs Urban salaries and wages gap",
			"Payment Rates by Gender",
			"Rural Vs Urban salaries and wages gap",
			"Payment Rates by Gender",
		],
		dates: [
			"January 2020",
			"September 2020",
			"July 2020",
			"August 2020",
			"December 2019",
			"November 2019",
			"August 2019",
			"May 2019",
			"March 2019",
			"January 2019",
		],
	};
	return (
		<div className="case-studies">
			{caseStudies.title.map((el, elI) => (
				<ResourcesDataCard
					imgData={{
						src: `${props.icon}`,
						alt: `${caseStudies.imgData.alt}`,
						width: props.imgSizes.width,
						height: props.imgSizes.height,
					}}
					title={el}
					data={{ date: caseStudies.dates[elI] }}
					downloadFunction={handleDownload}
				/>
			))}
		</div>
	);
}

export default Casestudies;
