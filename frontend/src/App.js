import "./App.css";

import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/pages/Home";
import { MyList } from "./components/favorites/MyList";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<>
				<div>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/mylist' element={<MyList />} />
						<Route path='/signin' element={<Login />} />
						<Route path='/signup' element={<Register />} />
					</Routes>
				</div>
			</>
		</Router>
	);
}

export default App;
