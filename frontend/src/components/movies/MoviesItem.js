import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { createFavoriteMovies } from "../../actions/favorites";

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
	const dispatch = useDispatch();
	useEffect(() => {}, [dispatch]);
	const [addMovie, setAddMovie] = useState({
		Title: "",
		Year: "",
		imdbID: "",
		Poster: "",
		Type: "",
	});
	const navigate = useNavigate();
	let check = true;
	if (Poster === "N/A") {
		check = false;
	}
	const handleClick = (e) => {
		// console.log("clicked add ");
		setAddMovie({
			Title,
			Year,
			imdbID,
			Poster,
			Type,
		});
		if (localStorage.token) {
			dispatch(createFavoriteMovies({ Title, Year, imdbID, Poster, Type }));
		}
	};
	// console.log(addMovie);
	return (
		<>
			<div className='movies-item-tile'>
				{check && (
					<div>
						<img
							src={Poster}
							alt='movie-img'
							className='movies-item-image'
						></img>
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
					<h2 className='movies-animated-text'>
						{Year}
						<p className='movies-animated-text'>
							{" "}
							{imdbID}
							{Type}
						</p>
					</h2>
				</div>
			</div>
			<button className='add-to-favorite-button' onClick={handleClick}>
				Add to favorite
			</button>
		</>
	);
};
