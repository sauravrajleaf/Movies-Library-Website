import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({
	moviesPerPage,
	totalMovies,
	paginate,
	nextPage,
}) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<ul>
				{pageNumbers.map((number) => (
					<li>
						<a
							onClick={() => {
								paginate(number);
								nextPage();
							}}
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
