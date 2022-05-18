import React from "react";

import { MoviesItem } from "./MoviesItem";

import "./MoviesList.css";

export const MoviesList = ({ movies }) => {
	return (
		<div className='movies-container'>
			{movies.map((movie) => (
				<MoviesItem key={movies.id} movie={movie} />
			))}
		</div>
	);
};
