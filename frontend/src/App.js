import "./App.css";

import { Home } from "./components/pages/Home";
import { MyList } from "./components/pages/MyList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<>
				<div>
					<Routes>
						hey
						<Route path='/' element={<Home />} />
						<Route path='/mylist' element={<MyList />} />
					</Routes>
				</div>
			</>
		</Router>
	);
}

export default App;
