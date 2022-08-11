/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import "./Pagination.css";

export const Pagination = ({
	moviesPerPage,
	totalMovies,
	paginate,
	searchMovies,
	searchValue,
}) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className='pagination-container'>
			<div className='page-numbers'>
				<ul>
					{pageNumbers.map((number) => (
						<li>
							<a
								href='#'
								onClick={() => {
									paginate(number);
									searchMovies(searchValue, number);
								}}
							>
								{number}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
