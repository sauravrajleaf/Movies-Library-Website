import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/pages/Home";
import { MyList } from "./components/favorites/MyList";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";

// import AuthState from "./context/auth/AuthState";
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
						<Route path='/mylist' element={<MyList />} />
						<Route path='/signin' element={<Login />} />
						<Route path='/signup' element={<Register />} />
					</Routes>
				</div>
			</>
		</Provider>
		// </AuthState>
	);
}

export default App;
