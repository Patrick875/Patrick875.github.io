//jshint esversion:9
import React from "react";
import axios from "axios";
import download from "downloadjs";
import ResourcesDataCard from "../../general/Resources_data_card";

function Overview(props) {
	const imgSizes = props.imgSizes;
	const data = {
		ebooks: {
			imgData: {
				src: `${props.icons.ebookIcon}`,
				alt: "Pdf icon",
			},
			title: [
				"unemployment in Rwanda",
				"Labour force Distribution by Sector",
				"Labour underUtilization",
			],
			dates: ["July 2020", "August 2020", "September 2020"],
		},
		caseStudies: {
			imgData: {
				src: `${props.icons.caseStudyIcon}`,
				alt: "Searching Icon",
			},
			title: [
				"Factors for Youth unemployment",
				"Women unemployment in Rwanda",
				"Rural Vs Urban salaries and wages gap",
				"Payment Rates by Gender",
			],
			dates: ["January 2020", "December 2019", "July 2020", "October 2020"],
		},
		reportsAndPublications: {
			imgData: {
				src: `${props.icons.chartIcon}`,
				alt: "Chart Icon",
			},
			reports: {
				title: [
					"Workforce availability by sector",
					"Unemployment Status",
					"NISR labor statistics quota 2 2020",
					"ILO Rwanda labor status quota 2 2020",
				],
				dates: ["January 2020", "July 2019", "July 2020", "July 2020"],
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
				],
			},
		},
	};
	const titleHead = ["E-BOOKS", "CASE STUDIES", "REPORTS AND ANNOUNCEMENTS"];
	const titleHeadSrc = [
		props.icons.ebookIcon,
		props.icons.caseStudyIcon,
		props.icons.chartIcon,
	];
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

	return (
		<div>
			<h3>OUR RESOURCES</h3>
			<h4>Take a look at our law data. Find out where we get our basis.</h4>
			<h3>How do you like to view your data?</h3>
			<div className="docs">
				{titleHead.map((el, elI) => (
					<ResourcesDataCard
						titleHead={el}
						imgData={{
							width: imgSizes.width,
							height: imgSizes.height,
							src: `${titleHeadSrc[elI]}`,
						}}
						downloadFunction={handleDownload}
					/>
				))}
			</div>
			<div>
				<h3>OUR LATEST PUBLICATIONS</h3>
				<h4 className="title-h4"> Featured Ebooks</h4>
			</div>
			<div className="e-books">
				{data.ebooks.title.map((el, elI) => (
					<ResourcesDataCard
						imgData={{
							src: `${data.ebooks.imgData.src}`,
							alt: data.ebooks.imgData.alt,
							width: imgSizes.width,
							height: imgSizes.height,
						}}
						title={el}
						data={{ date: data.ebooks.dates[elI] }}
						downloadFunction={handleDownload}
					/>
				))}
			</div>
			<div>
				<h4 className="title-h4"> Featured Case Studies</h4>
			</div>
			<div className="case-studies">
				{data.caseStudies.title.map((el, elI) => (
					<ResourcesDataCard
						imgData={{
							src: `${data.caseStudies.imgData.src}`,
							alt: `${data.caseStudies.imgData.alt}`,
							width: imgSizes.width,
							height: imgSizes.height,
						}}
						title={el}
						data={{ date: [data.caseStudies.dates[elI]] }}
						downloadFunction={handleDownload}
					/>
				))}
			</div>
			<h4 className="title-h4">Featured Reports and Publications</h4>
			<div className="reports">
				{data.reportsAndPublications.reports.title.map((el, elI) => (
					<ResourcesDataCard
						imgData={{
							src: `${data.reportsAndPublications.imgData.src}`,
							alt: `${data.reportsAndPublications.imgData.alt}`,
							width: imgSizes.width,
							height: imgSizes.height,
						}}
						title={el}
						data={{
							date: [data.reportsAndPublications.reports.dates[elI]],
						}}
						downloadFunction={handleDownload}
					/>
				))}
			</div>

			<div className="publications">
				{data.reportsAndPublications.publications.title.map((el, elI) => (
					<ResourcesDataCard
						imgData={{
							src: `${data.reportsAndPublications.imgData.src}`,
							alt: `${data.reportsAndPublications.imgData.alt}`,
							width: imgSizes.width,
							height: imgSizes.height,
						}}
						title={el}
						data={{
							date: [data.reportsAndPublications.publications.dates[elI]],
						}}
						downloadFunction={handleDownload}
					/>
				))}
			</div>
		</div>
	);
}

export default Overview;
