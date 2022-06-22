import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
// Components Import
import { Navbar } from "./components";

// Pages Import
import { Home, Signup, Login } from "./pages";

function App() {
	const queryClient = new QueryClient();

	return (
		<Router>
			<QueryClientProvider client={queryClient}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</QueryClientProvider>
		</Router>
	);
}

export default App;
