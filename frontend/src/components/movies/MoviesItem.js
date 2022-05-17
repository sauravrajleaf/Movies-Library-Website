// import React, { useState } from "react";
// import axios from "axios";

// import { Link } from "react-router-dom";

import movieImage from "../../img/movie.jpg";

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
	console.log(Poster);
	let check = true;
	if (Poster === "N/A") {
		check = false;
	}
	return (
		<div className='movie-item'>
			{check && (
				<img src={Poster} height='400px' width='300px' alt='movie-img'></img>
			)}
			{!check && (
				<div>
					<img src={movieImage} height='400px' width='300px'></img>
					<p>No Image Available</p>
				</div>
			)}

			{Title}
			{Year}
			{Type}
			{/* <div>
				<button>
					<Link to={`/movie/${imdbID}`} onClick={movieDetails(imdbID)}>
						Click For More Info
					</Link>
				</button>
			</div> */}
		</div>
	);
};
