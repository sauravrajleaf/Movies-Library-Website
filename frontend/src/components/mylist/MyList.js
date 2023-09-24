import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteMovies } from '../../actions/favorites';
import { deleteFavoriteMovies } from '../../actions/favorites';

import { setAuthToken } from '../../utils/setAuthToken';

import { MyListItems } from './MyListItems';

import './MyList.css';
import { Navigate, useNavigate } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export const MyList = () => {
	// const dispatch = useDisptach();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const favoriteList = useSelector((state) => state.favorites);
	const userData = useSelector((state) => state.auth.user);
	console.log(userData);
	const { favorites } = favoriteList;

	useEffect(() => {
		dispatch(getFavoriteMovies());
	}, [dispatch]);

	// console.log(favoriteList);

	const handleShareClick = async (e) => {
		e.preventDefault();
		console.log(favorites[0].user);
		navigate(`/list/sharing/${userData.name}/${favorites[0].user}`);
	};

	return (
		<div className='mylist-container'>
			<h1>My List</h1>
			<CopyToClipboard text='Hello!'>
				<button className='add-to-favorite-button' onClick={handleShareClick}>
					Click to create share page
				</button>
			</CopyToClipboard>

			<div className='movies-container'>
				{' '}
				{favorites !== null &&
					favorites.map((myList) => (
						<MyListItems myList={myList} key={myList.id} />
					))}
			</div>
		</div>
	);
};
