import { Routes, Route } from "react-router-dom";

// Components Import
import { Navbar } from "../components";

// Pages Import
import { Home, Signup, Login, NetflixDetails } from "../pages";

// Route Protector
import { PrivateRoute } from "./PrivateRoute";
import { HomeRedirect } from "./HomeRedirect";

export const AppRoutes = () => {
	return (
		<>
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
				<Route path="/details" element={<NetflixDetails />} />
				<Route
					path="/signup"
					element={
						<HomeRedirect>
							<Signup />
						</HomeRedirect>
					}
				/>
				<Route
					path="/login"
					element={
						<HomeRedirect>
							<Login />
						</HomeRedirect>
					}
				/>
			</Routes>
		</>
	);
};
