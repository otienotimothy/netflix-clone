import { QueryClientProvider, QueryClient } from "react-query";

import { BrowserRouter as Router } from "react-router-dom";

// Add Server State Provider
import { AuthProvider } from "./context/auth-context/AuthProvider";

// App Routing
import { AppRoutes } from "./routing/AppRoutes";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<AuthProvider>
					<AppRoutes />
				</AuthProvider>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
