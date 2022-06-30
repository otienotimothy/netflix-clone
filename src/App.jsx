import { QueryClientProvider, QueryClient } from "react-query";

// Add Server State Provider
import { AuthProvider } from "./context/auth-context/AuthProvider";

// App Routing
import { AppRoutes } from "./routing/AppRoutes"

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default App;
