//jshint esversion:9
import React from "react";
import axios from "axios";
import download from "downloadjs";
import ResourcesDataCard from "../../general/Resources_data_card";

function Ebooks(props) {
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
	const ebooks = {
		imgData: {
			alt: "Pdf icon",
		},
		title: [
			"unemployment in Rwanda",
			"Labour force Distribution by Sector",
			"Labour underUtilization",
			"unemployment in Rwanda",
			"Labour force Distribution by Sector",
			"Labour underUtilization",
			"unemployment in Rwanda",
			"Labour force Distribution by Sector",
			"Labour underUtilization",
		],
		dates: [
			"July 2020",
			"August 2020",
			"September 2020",
			"July 2019",
			"August 2019",
			"September 2019",
			"July 2018",
			"August 2018",
			"September 2018",
		],
	};
	return (
		<div className="e-books">
			{ebooks.title.map((el, elI) => (
				<ResourcesDataCard
					imgData={{
						src: props.icon,
						alt: `${ebooks.imgData.alt} `,
						width: props.imgSizes.width,
						height: props.imgSizes.height,
					}}
					data={{ dates: ebooks.dates[elI] }}
					title={el}
				/>
			))}
		</div>
	);
}

export default Ebooks;
