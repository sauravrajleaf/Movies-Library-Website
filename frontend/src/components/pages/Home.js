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
								placeholder='Enter movie name'
								value={searchValue}
								onChange={onInputChange}
							></input>
						</label>
						<input type='submit' value='submit' />
					</form>

					<div className='search-results'>
						{searchValue && (
							<input
								type='submit'
								value='Clear Search'
								onClick={clearSearchValue}
							/>
						)}
						{searchValue && check && <h1>Type atleast 3 or more characters</h1>}
						<br></br>
						{!movies && <p>Your Result will be displayed here</p>}
						{movies && <MoviesList movies={movies} />}
					</div>
				</div>
			</div>
		</>
	);
};
