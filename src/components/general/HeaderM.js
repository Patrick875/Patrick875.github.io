//jshint esversion:9
import React from "react";
import SideDrawer from "./Sidedrawer";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	List,
	ListItem,
	ListItemText,
	Container,
	Hidden,
	Fab,
} from "@material-ui/core";
import logo from "./../../images/SNOWWHITE LMIS copy.png";
import HideOnScroll from "./HideOnScroll";
// import BackToTop from "./BackToTop";

const useStyles = makeStyles({
	root: {
		backgroundColor: "#035b99",
	},
	navbarDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`,
	},
	navListDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`,
	},
	linkText: {
		textDecoration: `none`,
		textTransform: `uppercase`,
		color: `white`,
	},
	appBarColor: {
		colorPrimary: "none",
	},
});

const navLinks = [
	{ title: `HOME`, path: `/` },
	{ title: `LABOUR MARKET INDICATORS`, path: `/labour-market-indicators` },
	{ title: `RESOURCES`, path: `/resources` },
	{ title: `Log In`, path: "/login" },
	{ title: `Sign up`, path: "/signup" },
];
const HeaderM = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<HideOnScroll>
				<AppBar position="fixed" classes={{ root: classes.root }}>
					<Toolbar>
						<Container className={classes.navbarDisplayFlex} maxWidth="md">
							<Link to="/">
								<img src={logo} alt="LMIS LOGO" width="120" height="100" />
							</Link>
							<Hidden smDown>
								<List
									component="nav"
									aria-labelledby="main navigation"
									className={classes.navDisplayFlex}>
									{navLinks.map(({ title, path }) => (
										<Link to={path} key={title} className={classes.linkText}>
											<ListItem button>
												<ListItemText
													primary={title}
													className={classes.linkText}
												/>
											</ListItem>
										</Link>
									))}
								</List>
							</Hidden>
							<Hidden mdUp>
								<SideDrawer navLinks={navLinks} />
							</Hidden>
						</Container>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar id="back-to-top-anchor" />
		</React.Fragment>
	);
};

export default HeaderM;
