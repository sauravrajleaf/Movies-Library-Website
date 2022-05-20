import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import { Home } from "./components/pages/Home";
import { MyList } from "./components/favorites/MyList";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Footer } from "./components/layout/Footer";

import PrivateRoute from "./components/routing/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";

import { setAuthToken } from "./utils/setAuthToken";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		// <AuthState>
		<Provider store={store}>
			<>
				<div>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/signin' element={<Login />} />
						<Route path='/signup' element={<Register />} />
						<Route element={<PrivateRoute />}>
							<Route path='/mylist' element={<MyList />} />
						</Route>
					</Routes>
					{/* <Footer /> */}
				</div>
			</>
		</Provider>
		// </AuthState>
	);
}

export default App;
