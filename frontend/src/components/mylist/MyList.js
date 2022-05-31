import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getFavoriteMovies } from "../../actions/favorites";
import { deleteFavoriteMovies } from "../../actions/favorites";

import { setAuthToken } from "../../utils/setAuthToken";

import { MyListItems } from "./MyListItems";

import "./MyList.css";

export const MyList = () => {
	// const dispatch = useDisptach();
	const dispatch = useDispatch();
	const favoriteList = useSelector((state) => state.favorites);
	const { favorites } = favoriteList;

	useEffect(() => {
		dispatch(getFavoriteMovies());
	}, [dispatch]);

	console.log(favoriteList);
	return (
		<div className='mylist-container'>
			<h1>My List</h1>
			<button className='add-to-favorite-button'>Share your list</button>
			<div className='movies-container'>
				{" "}
				{favorites !== null &&
					favorites.map((myList) => (
						<MyListItems myList={myList} key={myList.id} />
					))}
			</div>
		</div>
	);
};
