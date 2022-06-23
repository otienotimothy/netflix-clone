import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

// Add Server State Provider
import { AuthProvider } from "./context/auth-context/AuthProvider";

// Components Import
import { Navbar } from "./components";

// Pages Import
import { Home, Signup, Login } from "./pages";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</Router>
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default App;
