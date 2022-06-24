import { Container, Grid } from "@mui/material";
import React from "react";
import favicon from "../../images/favicon-bg.png";

const Home = () => {
	const heroImage = {
		width: "100%",
		// height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
	const heroContent = {
		fontFamily: "'Square Peg', sans-serif",
		fontSize: "5rem",
		lineHeight: "5.5rem",
		color: "#63b5e5",
		fontWeight: "700",
		letterSpacing: "0.25rem",
		flexFlow: "column",
		textAlign: "center",
	};
	const heroContentSub = {
		fontSize: "3.5rem",
		fontWeight: "400",
		lineHeight: "3.75rem",
		letterSpacing: "0.1rem",
		margin: "1rem 0",
	};
	const heroContainer = {
		width: "100%",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<>
			<Container component="section" className="hero">
				<Grid container sx={heroContainer}>
					<Grid item xs={12} md={12} lg={6}>
						<div
							className="hero-content"
							style={{ ...heroContent, ...heroImage }}
						>
							<span>Scholarshipopolis</span>
							<span style={heroContentSub}>
								Check eligibility for your scholarship today.
							</span>
						</div>
					</Grid>
					<Grid item xs={12} md={12} lg={6}>
						<div className="hero-image" style={heroImage}>
							<img src={favicon} alt="Scholarshipopolis" />
						</div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Home;
