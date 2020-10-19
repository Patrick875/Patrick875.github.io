//jshint esversion:9
import React from "react";
import ResourcesDownloadBtn from "./Resources_download_btn";

function ResourcesDataCard(props) {
	return (
		<div>
			<img
				src={`${props.imgData.src}`}
				alt={`${props.imgData.alt}`}
				height={props.imgData.height}
				width={props.imgData.width}
			/>
			<h4>{props.data.title}</h4>
			<p>{props.data.date}</p>
			<ResourcesDownloadBtn
				onClick={props.downloadFunction}
				class="download-btn">
				Download
			</ResourcesDownloadBtn>
			<ResourcesDownloadBtn onClick={props.viewFunction} class="view-btn">
				View
			</ResourcesDownloadBtn>
		</div>
	);
}

export default ResourcesDataCard;
