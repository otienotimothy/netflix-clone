import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Import
import { Navbar } from "../components";

// Pages Import
import { Home, Signup, Login } from "../pages";

// Route Protector
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
};
