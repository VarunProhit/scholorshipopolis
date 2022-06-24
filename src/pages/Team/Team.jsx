import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

const team = [
	{
		name: "Varun Prohit",
		subtitle: "Web Developer | Competitive Programmer",
	//	image: "https://avatars.githubusercontent.com/u/84612609?v=4",
		mail: "varunprohit222@gmail.com",
		github: "https://github.com/varunprohit",
		linkedin: "https://www.linkedin.com/in/varunprohit/",
	},
	{
		name: "Saksham Sharma",
		subtitle: "Web Developer",
		//image: "https://avatars.githubusercontent.com/u/76739180?v=4",
		mail: "sakshamsharma8982@gmail.com",
		github: "https://github.com/saksham05sharma",
		linkedin: "https://linkedin.com/in/sakshamsharma",
	},
	{
		name: "Tichita",
		subtitle: "Web Developer",
		//image: "https://avatars.githubusercontent.com/u/76739180?v=4",
		mail: "20161@iiitu.ac.in",
		github: "https://github.com/",
		linkedin: "https://linkedin.com/in/tichita",
	},
	{
		name: "AkminderJeet Singh",
		subtitle: "Web Developer",
		//ttttttttimage: "https://avatars.githubusercontent.com/u/76739180?v=4",
		mail: "20105@iiituac.in",
		github: "https://github.com/saksham05sharma",
		linkedin: "https://linkedin.com/in/tichita",
	},
];

const Team = () => {
	const IcnBtnStyles = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<>
			<Container
				component="header"
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "1rem auto",
				}}
			>
				<Typography component="h2" variant="h2">
					Our Team
				</Typography>
			</Container>
			<Container
				component="section"
				sx={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					flexWrap: "wrap",
					minHeight: "75vh",
				}}
			>
				{team.map((member, index) => (
					<Card
						sx={{
							display: "flex",
							margin: "1rem auto",
						}}
						key={index}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography component="div" variant="h5">
									{member.name}
								</Typography>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{member.subtitle}
								</Typography>
							</CardContent>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									pl: 1,
									pb: 1,
								}}
							>
								<IconButton aria-label="email">
									<a
										href={`mailto:${member.mail}`}
										style={IcnBtnStyles}
									>
										<Email />
									</a>
								</IconButton>
								<IconButton aria-label="github">
									<a
										href={member.github}
										style={IcnBtnStyles}
									>
										<GitHub />
									</a>
								</IconButton>
								<IconButton aria-label="linkedin">
									<a
										href={member.linkedin}
										style={IcnBtnStyles}
									>
										<LinkedIn />
									</a>
								</IconButton>
							</Box>
						</Box>
						<CardMedia
							component="img"
							sx={{ width: 151 }}
							image={member.image}
							alt={member.name}
						/>
					</Card>
				))}
			</Container>
		</>
	);
};

export default Team;
