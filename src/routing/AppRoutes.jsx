import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Import
import { Navbar } from '../components'

// Pages Import
import { Home, Signup, Login } from "../pages";

export const AppRoutes = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
};
