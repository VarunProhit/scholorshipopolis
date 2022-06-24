import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Check from "./pages/Check/Check";
import Login from "./pages/Login/Login";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Register from "./pages/Register/Register";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/check" element={<Check />} />
				{/* <Route path="/team" element={<Team />} /> */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
