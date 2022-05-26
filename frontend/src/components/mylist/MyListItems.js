import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { deleteFavoriteMovies } from "../../actions/favorites";

import { createFavoriteMovies } from "../../actions/favorites";

import movieImage from "../../img/movie.jpg";

export const MyListItems = ({
	myList: { Title, Year, imdbID, Poster, Type, _id },
}) => {
	const dispatch = useDispatch();
	const handleClick = (id) => {
		// console.log("delete movie");
		// console.log(id);
		dispatch(deleteFavoriteMovies(id));
	};

	let check = true;
	if (Poster === "N/A") {
		check = false;
	}

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
						<p className='movies-animated-text'> {Type}</p>
					</h2>
				</div>
			</div>
			<button
				className='add-to-favorite-button'
				onClick={() => {
					handleClick(_id);
				}}
			>
				Delete From My List
			</button>
		</>
	);
};
