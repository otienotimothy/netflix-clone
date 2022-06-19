import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Import
import { Navbar } from "./components";

// Pages Import
import {Home} from './pages'

function App() {
	return (
		<Router>
			<Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
		</Router>
	);
}

export default App;
