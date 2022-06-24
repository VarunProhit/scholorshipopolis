import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	InputAdornment,
	InputLabel,
	List,
	ListItem,
	MenuItem,
	OutlinedInput,
	Radio,
	RadioGroup,
	Select,
} from "@mui/material";
import _ from "lodash";
import axios from "axios";
import { KeyboardArrowRight } from "@mui/icons-material";

const theme = createTheme();

export default function Check() {
	const [checkElig, setCheckElig] = React.useState({
		name: "",
		gender: "",
		category: "",
		state: "",
		nationality: "",
		perIn12: 0,
		currentCourse: "",
		examGiven: "",
		rank: 0,
		income: 0
	});
	const [responseList, setResponseList] = React.useState([]);
	const genders = ["male", "female", "other"];
	const categories = ["General", "OBC", "SC","ST", "Minority"];
	let states = [
		"Andhra Pradesh",
		"Arunachal Pradesh",
		"Assam",
		"Bihar",
		"Chhattisgarh",
		"Goa",
		"Gujarat",
		"Haryana",
		"Himachal Pradesh",
		"Jammu and Kashmir",
		"Jharkhand",
		"Karnataka",
		"Kerala",
		"Madhya Pradesh",
		"Maharashtra",
		"Manipur",
		"Meghalaya",
		"Mizoram",
		"Nagaland",
		"Odisha",
		"Punjab",
		"Rajasthan",
		"Sikkim",
		"Tamil Nadu",
		"Telangana",
		"Tripura",
		"Uttarakhand",
		"Uttar Pradesh",
		"West Bengal",
		"Andaman and Nicobar Islands",
		"Chandigarh",
		"Dadra and Nagar Haveli",
		"Daman and Diu",
		"Delhi",
		"Lakshadweep",
		"Puducherry",
	];
	const nationalities = ["Indian", "Others"];
	const exams = ["JEE", "NEET"];
	const handleChange = (e) => {
		const { name, value } = e.target;
		setCheckElig({
			...checkElig,
			[name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:4000/api/check', {
				...checkElig
			})
			setResponseList(response.data)
		} catch (error) {
			console.log(error.response);
		}
		// setCheckElig({
		// 	name: "",
		// 	gender: "",
		// 	category: "",
		// 	state: "",
		// 	nationality: "",
		// 	perIn12: 0,
		// 	examGiven: "",
		// 	rank: 0,
		// 	income: ''
		// });
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="md" sx={{ mb: 3 }}>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Enter your Details
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							name="name"
							label="Name"
							type="text"
							id="name"
							autoFocus
							value={checkElig.name}
							onChange={handleChange}
						/>
						<FormControl sx={{ mt: 2, mb: 2 }}>
							<FormLabel id="demo-radio-buttons-group-label">
								Gender
							</FormLabel>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								name="radio-buttons-group"
								row
							>
								{genders.map((g, index) => (
									<FormControlLabel
										value={g}
										control={
											<Radio
												checked={checkElig.gender === g}
												value={g}
												name="gender"
												onChange={handleChange}
											/>
										}
										label={_.capitalize(g)}
										key={index}
									/>
								))}
							</RadioGroup>
						</FormControl>
						<FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
							<InputLabel id="demo-simple-select-label">
								Category
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={checkElig.category}
								label="Category"
								name="category"
								onChange={handleChange}
							>
								{categories.map((c, index) => (
									<MenuItem key={index} value={c}>
										{c}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
							<TextField
								id="demo-simple-select"
								value={checkElig.state}
								label="State"
								name="state"
								onChange={handleChange}
								inputProps={{ list: "typeSuggestions" }}
							/>
							<datalist id="typeSuggestions">
								{states.map((s, index) => (
									<option key={index} value={s}>
										{s}
									</option>
								))}
							</datalist>
						</FormControl>
						<FormControl sx={{ mt: 2, mb: 2 }}>
							<FormLabel id="demo-radio-buttons-group-label">
								Nationality
							</FormLabel>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								name="radio-buttons-group"
								row
							>
								{nationalities.map((n, index) => (
									<FormControlLabel
										value={n}
										control={
											<Radio
												checked={
													checkElig.nationality === n
												}
												value={n}
												name="nationality"
												onChange={handleChange}
											/>
										}
										label={_.capitalize(n)}
										key={index}
									/>
								))}
							</RadioGroup>
						</FormControl>
						<FormControl
							sx={{ mt: 1, mb: 1, width: "25ch" }}
							variant="outlined"
						>
							<OutlinedInput
								id="outlined-adornment-weight"
								value={checkElig.perIn12}
								name="perIn12"
								onChange={handleChange}
								endAdornment={
									<InputAdornment position="end">
										%
									</InputAdornment>
								}
								type="number"
								aria-describedby="outlined-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
									min: 0,
									max: 100,
								}}
							/>
							<FormHelperText id="outlined-weight-helper-text">
								12<sup>th</sup> Percentage
							</FormHelperText>
						</FormControl>
						<TextField
							margin="normal"
							required
							fullWidth
							name="currentCourse"
							label="Current Course"
							type="text"
							id="currentCourse"
							value={checkElig.currentCourse}
							onChange={handleChange}
						/>
						<FormControl sx={{ mt: 2, mb: 2 }}>
							<FormLabel id="demo-radio-buttons-group-label">
								Exam Given
							</FormLabel>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								name="radio-buttons-group"
								row
							>
								{exams.map((e, index) => (
									<FormControlLabel
										value={e}
										control={
											<Radio
												checked={
													checkElig.examGiven === e
												}
												value={e}
												name="examGiven"
												onChange={handleChange}
											/>
										}
										label={_.toUpper(e)}
										key={index}
									/>
								))}
							</RadioGroup>
						</FormControl>
						{checkElig.examGiven !== "" && (
							<FormControl
								sx={{ mt: 1, mb: 1, width: "100%" }}
								variant="outlined"
							>
								<OutlinedInput
									id="outlined-adornment-weight"
									value={checkElig.rank}
									name="rank"
									onChange={handleChange}
									type="number"
									aria-describedby="outlined-weight-helper-text"
								/>
								<FormHelperText id="outlined-weight-helper-text">
									Rank obtained in{" "}
									{_.toUpper(checkElig.examGiven)}
								</FormHelperText>
							</FormControl>
						)}
						<TextField
							margin="normal"
							required
							fullWidth
							name="income"
							label="Family Income"
							type="number"
							id="income"
							autoFocus
							value={checkElig.income}
							onChange={handleChange}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Submit Your Details
						</Button>
						{responseList.length > 0 && <Box component='section' sx={{ mt: '2rem', mb: '2rem' }}>
							<Typography component='h2' sx={{ fontSize: '1.5rem' }}>Name of Scholarships</Typography>
							<List>
								{
									responseList.map((ele, index) =>
										<ListItem key={index}>
											<KeyboardArrowRight />
											{ele.name_of_scholarship}
										</ListItem>)
								}
							</List>
						</Box>}
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
