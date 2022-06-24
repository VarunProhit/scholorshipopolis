import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme();

export default function Register() {
	const [registerUser, setRegisterUser] = React.useState({
		fname: "",
		lname: "",
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setRegisterUser({
			...registerUser,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(registerUser);
	};
	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						height: "70vh",
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign Up Today
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
							id="fname"
							type="text"
							label="First Name"
							name="fname"
							autoComplete="fname"
							value={registerUser.fname}
							onChange={handleChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="lname"
							type="text"
							label="Last Name"
							name="lname"
							autoComplete="lname"
							value={registerUser.lname}
							onChange={handleChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							type="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							value={registerUser.email}
							onChange={handleChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							type="password"
							id="password"
							label="Password"
							name="password"
							autoComplete="password"
							value={registerUser.password}
							onChange={handleChange}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign up
						</Button>
						<Grid container>
							<Grid item>
								<Link to="/login">
									{"Already have an account? Login"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
