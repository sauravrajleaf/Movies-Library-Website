import React, { useEffect, useState } from "react";

import axios from "axios";

import "./Home.css";

export const Home = () => {
	const [movies, setMovies] = useState([]);
	const searchMovies = async () => {
		const url = "https://www.omdbapi.com/?apikey=1a7828e4&s=star";
		const response = await axios.get(url);
		// console.log(response);
		setMovies(response.data.Search);
		// setTimeout(() => {

		// 	console.log(movies);
		// }, 200);
	};

	useEffect(() => {
		searchMovies();
		// eslint-disable-next-line
	}, []);

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
							></input>
						</label>
						<input type='submit' value='submit' />
					</form>
					<div className='search-results'>
						Your Result will be displayed here
						{movies.length}
						{movies.map((movie, index) => (
							<div>
								<img src={movie.Poster} alt='movie-img'></img>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
