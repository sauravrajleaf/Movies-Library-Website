import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

import movieImage from "../../img/movie.jpg";

export const PublicListItems = ({
	item: { Title, Year, imdbID, Poster, Type, _id },
}) => {
	console.log(Title);
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
		</>
	);
};
