//jshint esversion:9
import React, { useState } from "react";
import ebookIcon from "./../../images/icons/ebook.png";
import caseStudyIcon from "./../../images/icons/case-study.png";
import chartIcon from "./../../images/icons/graph-bar.png";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
// import { Document, Page } from "react-pdf";

//import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 0,
	},
}));

export default function Resources() {
	// const [numpages, setNumpages] = useState(null);
	// const [pageNumber, setPageNumber] = useState(1);

	// const onDocumentLoadSucess=({numpages})=>{
	// 	setNumpages({numpages});
	// };
	// const goToPrevPage=()=>{
	// 	setPageNumber({pageNumber:pageNumber-1});
	// };
	// const goToNextPage=()=>{
	// 	setPageNumber({pageNumber:pageNumber+1});
	// }

	const [description, setDescription] = useState({
		title: "Quota-2 Data",
		text: "here is data from the 2nd quota of the year 2020",
	});
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;
	return (
		<div className="resources">
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}>
				<Card className={classes.root} variant="outlined">
					<CardContent>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom>
							{description.title}
						</Typography>

						<Typography className={classes.pos} color="textSecondary">
							{description.text}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">View</Button>
						<Button
							size="small"
							href="./../../../public/docs/LMIS Training Agenda.pdf"
							download>
							Download
						</Button>
					</CardActions>
				</Card>
			</Popover>
			<h3>OUR RESOURCES</h3>
			<h4>Take a look at our law data. Find out where we get our basis.</h4>
			<h3>How do you like to view your data?</h3>
			<div className="docs">
				<div>
					<img src={ebookIcon} alt="pdf icon" width="80" height="80" />
					<h4>E-BOOKS</h4>
				</div>
				<div>
					<img
						src={caseStudyIcon}
						alt="caseStudyIcons-icon"
						width="80"
						height="80"
					/>
					<h4>CASE STUDIES</h4>
				</div>
				<div>
					<img src={chartIcon} alt="chartIcons-icon" width="80" height="80" />
					<h4>CHARTS</h4>
				</div>
			</div>
			<h3>OUR LATEST PUBLICATIONS</h3>
			<h4 className="title-h4">E-BOOKS</h4>
			<div className="e-books">
				<div aria-describedby={id} onClick={handleClick}>
					<img src={ebookIcon} alt="pdf-icon" width="80" height="80" />
					<h4>Unemployment in Rwanda</h4>
					<p>July 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img src={ebookIcon} alt="pdf-icon" width="80" height="80" />
					<h4>Unemployment in Rwanda</h4>
					<p>July 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img src={ebookIcon} alt="pdf-icon" width="80" height="80" />
					<h4>Unemployment in Rwanda</h4>
					<p>July 2020</p>
				</div>
			</div>
			<h4 className="title-h4">CASE STUDIES</h4>
			<div className="case-studies">
				<div aria-describedby={id} onClick={handleClick}>
					<img
						src={caseStudyIcon}
						alt="caseStudyIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img
						src={caseStudyIcon}
						alt="caseStudyIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img
						src={caseStudyIcon}
						alt="caseStudyIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
				</div>
			</div>
			<h4 className="title-h4">REPORTS AND PUBLICATIONS</h4>
			<div className="reports">
				<div aria-describedby={id} onClick={handleClick}>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
			</div>
			<h4 className="title-h4">PUBLICATIONS</h4>
			<div className="publications">
				<div aria-describedby={id} onClick={handleClick}>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div aria-describedby={id} onClick={handleClick}>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
			</div>
		</div>
	);
}

// <Typography className={classes.paragraph}>
// 	The content of the Popover.
// </Typography>;
