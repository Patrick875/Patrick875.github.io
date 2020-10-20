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
			<h4>{props.data ? props.title : props.titleHead}</h4>
			{props.data ? (
				<React.Fragment>
					<p>{props.data.date}</p>
					<ResourcesDownloadBtn
						onClick={props.downloadFunction}
						class="download-btn">
						Download
					</ResourcesDownloadBtn>
					<ResourcesDownloadBtn onClick={props.viewFunction} class="view-btn">
						View
					</ResourcesDownloadBtn>
				</React.Fragment>
			) : null}
		</div>
	);
}

export default ResourcesDataCard;
