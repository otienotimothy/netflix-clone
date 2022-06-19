import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
// Components Import
import { Navbar } from "./components";

// Pages Import
import { Home } from "./pages";

function App() {
	const queryClient = new QueryClient();

	return (
		<Router>
			<QueryClientProvider client={queryClient}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</QueryClientProvider>
		</Router>
	);
}

export default App;
