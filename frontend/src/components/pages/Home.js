import React, { useEffect, useState } from "react";
import axios from "axios";

import { MoviesList } from "../movies/MoviesList";

import "./Home.css";

export const Home = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const searchMovies = async (searchValue) => {
		const url = `http://www.omdbapi.com/?apikey=1a7828e4&s=${searchValue}`;
		const response = await axios.get(url);
		// console.log(response);
		if (response) {
			setMovies(response.data.Search);
		}
		// setTimeout(() => {

		// 	console.log(movies);
		// }, 200);
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
	};

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
						{searchValue}
						<br></br>
						{!movies && <p>Your Result will be displayed here</p>}
						{movies && <MoviesList movies={movies} />}
					</div>
				</div>
			</div>
		</>
	);
};
