import React, { useEffect, useState } from "react";
import axios from "axios";

import { MoviesList } from "../movies/MoviesList";

import "./Home.css";

export const Home = () => {
	const [movies, setMovies] = useState([]);
	const [check, setCheck] = useState("");
	const [searchValue, setSearchValue] = useState("");
	const searchMovies = async (searchValue) => {
		const sendReq = await axios(`/api/data/${searchValue}`);
		if (sendReq.data.Error !== null) {
			// console.log(sendReq.data.Error);
			setCheck(sendReq.data.Error);
		}
		console.log(sendReq.data.Search);
		if (sendReq.data.Search !== null) {
			setMovies(sendReq.data.Search);
		}
	};

	useEffect(() => {
		searchMovies(searchValue);
		// eslint-disable-next-line
	}, [searchValue]);

	const onInputChange = (e) => {
		setSearchValue(e.target.value);
	};

	const clearSearchValue = () => {
		setSearchValue("");
		setMovies([]);
	};
	console.log(movies);
	return (
		<>
			<div className='home-container'>
				<div className='form-container'>
					<h2>Search your movie here</h2>
					<form action=''>
						<label>
							<input
								type='text'
								name='user-search'
								placeholder='Start Typing...'
								value={searchValue}
								onChange={onInputChange}
							></input>
						</label>
					</form>

					<div className='search-results'>
						{searchValue && (
							<button value='Clear Search' onClick={clearSearchValue}>
								Clear
							</button>
						)}
						{searchValue && check && <h3>Type atleast 3 or more characters</h3>}
						<br></br>
					</div>
				</div>
			</div>
			{!movies && <p>Your Result will be displayed here</p>}
			{movies && <MoviesList movies={movies} />}
		</>
	);
};
