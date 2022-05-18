// import React, { useState } from "react";
// import axios from "axios";

// import { Link } from "react-router-dom";

import movieImage from "../../img/movie.jpg";

import "./MoviesItem.css";

export const MoviesItem = ({
	movie: { Title, Year, imdbID, Poster, Type },
}) => {
	//EXTRA : Implement later after finishing
	// const [showMovie, setShowMovie] = useState({});
	// const movieDetails = async (imdbID) => {
	// 	const url = `https://www.omdbapi.com/?apikey=1a7828e4&i=${imdbID}`;
	// 	const response = await axios.get(url);
	// 	// console.log(response);
	// 	if (response) {
	// 		setShowMovie(response.data.Search);
	// 	}
	// 	console.log(showMovie);
	// };
	// console.log(Poster);
	let check = true;
	if (Poster === "N/A") {
		check = false;
	}
	return (
		<div className='movies-item-tile'>
			{check && (
				<div>
					<img src={Poster} alt='movie-img' className='movies-item-image'></img>
				</div>
			)}
			{!check && (
				<div>
					<img
						src={movieImage}
						alt='movie-img'
						className='movies-item-image'
					></img>
					<p>No Image Available</p>
				</div>
			)}
			<div className='movies-item-text'>
				<h1>{Title}</h1>
				<h2 className='movies-animated-text'>{Year}</h2>
				<p className='movies-animated-text'>
					{" "}
					{imdbID} {Type}
				</p>
				<div className='dots'>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
};
