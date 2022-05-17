import React from "react";

import { MoviesItem } from "./MoviesItem";

export const MoviesList = ({ movies }) => {
	return (
		<div>
			<div className='div' style={userStyle}>
				{movies.map((movie) => (
					<MoviesItem key={movies.id} movie={movie} />
				))}
			</div>
		</div>
	);
};

const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(3,1fr)",
	gridGap: "1rem",
};
