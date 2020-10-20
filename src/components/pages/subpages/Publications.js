//jshint esversion:9
import React from "react";
import axios from "axios";
import download from "downloadjs";
import ResourcesDataCard from "../../general/Resources_data_card";

function Publications(props) {
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
	const reportsAndPublications = {
		imgData: {
			alt: "Chart Icon",
		},
		reports: {
			title: [
				"Workforce availability by sector",
				"Unemployment Status",
				"NISR labor statistics quota 2 2020",
				"ILO Rwanda labor status quota 2 2020",
				"RDB labor status quota 1 2020",
				"ILO Rwanda labor status 2019",
			],
			dates: [
				"July 2020",
				"September 2020",
				"August 2020",
				"April 2020",
				"February 2020",
				"December 2019",
			],
		},
		publications: {
			title: [
				"Rwandan TVET-Education Assessment in relation with the labour market",
				"Rwandan Trade Systems efficiency in relation with the labour market",
				"Rwanda internal Trade Assessment in relation with the labour market",
				"Sectors with workforce overpopulation",
				"How do trade unions influence the labour force in Rwanda ?",
				"The influence of Regional Integration on Rwanda Labour Market",
				"The influence of international Trade on Rwanda Labour Market",
				"The influence of employee-taxes on Rwanda Labour Market",
				"The influence of corporate-tax on Rwanda Labour Market",
				"The implementation of new labor majors through cooperatives ",
				"Changes in the Labor Law of April 2019",
				"Changes affecting education from the new Law of Labour of April 2019",
				"The influence of corporate-tax on Rwanda Labour Market",
			],
			dates: [
				"January 2020",
				"June 2019",
				"March 2020",
				"September 2020",
				"May 2020",
				"February 2020",
				"July 2020",
				"August 2020",
				"November 2019",
				"April 2019",
				"April 2019",
				"April 2019",
				"April 2019",
			],
		},
	};
	return (
		<div className="publications">
			{reportsAndPublications.reports.title.map((el, elI) => (
				<ResourcesDataCard
					imgData={{
						src: `${props.icon}`,
						alt: `${reportsAndPublications.imgData.alt}`,
						width: props.imgSizes.width,
						height: props.imgSizes.height,
					}}
					title={el}
					data={{
						date: reportsAndPublications.reports.dates[elI],
					}}
					downloadFunction={handleDownload}
				/>
			))}
			{reportsAndPublications.publications.title.map((el, elI) => (
				<ResourcesDataCard
					imgData={{
						src: `${props.icon}`,
						alt: `${reportsAndPublications.imgData.alt}`,
						width: props.imgSizes.width,
						height: props.imgSizes.height,
					}}
					title={el}
					data={{
						date: reportsAndPublications.publications.dates[elI],
					}}
					downloadFunction={handleDownload}
				/>
			))}
		</div>
	);
}

export default Publications;
