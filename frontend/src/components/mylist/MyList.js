import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getFavoriteMovies } from "../../actions/favorites";

import { setAuthToken } from "../../utils/setAuthToken";

import "./MyList.css";

export const MyList = () => {
	// const dispatch = useDisptach();
	const dispatch = useDispatch();
	const favoriteList = useSelector((state) => state.favorites);
	const { favorites } = favoriteList;
	console.log(favoriteList);

	// // getFavoriteMovies();
	useEffect(() => {
		dispatch(getFavoriteMovies());
	}, [dispatch]);
	// const favorites = [] ;
	const handleClick = (e) => {
		console.log("delete movie");
	};

	return (
		<div className='movies-container'>
			{" "}
			<h1>MyList</h1>
			{favorites !== null &&
				favorites.map((myList) => (
					<>
						{" "}
						<img src={myList.Poster} alt='' />
						<h1>{myList.imdbID}</h1>
						<h1>{myList.Title}</h1>
						<button className='add-to-favorite-button' onClick={handleClick}>
							Delete From My List
						</button>
					</>
				))}
		</div>
	);
};
