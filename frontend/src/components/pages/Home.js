import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { MoviesList } from '../movies/MoviesList';
import { Pagination } from '../layout/Pagination';

import './Home.css';

import { URL } from '../../App';

export const Home = () => {
	const [movies, setMovies] = useState([]);
	const [check, setCheck] = useState('');
	const [searchValue, setSearchValue] = useState('');

	const [currentPage, setCurrentPage] = useState('1');
	const [moviesPerPage] = useState('10');
	const [totalMovies, setTotalMovies] = useState('');

	const navigate = useNavigate();
	useEffect(() => {
		searchMovies(searchValue);

		// eslint-disable-next-line
	}, [searchValue]);

	const searchMovies = async (searchValue, currentPage) => {
		// console.log(searchValue, currentPage);
		const sendReq = await axios.get(
			`${URL}/api/data/${searchValue}/${currentPage}`
		);
		if (sendReq.data.Error !== null) {
			// console.log(sendReq.data.Error);
			setCheck(sendReq.data.Error);
		}
		if (sendReq.data.Search !== null) {
			setMovies(sendReq.data.Search);
			setTotalMovies(sendReq.data.totalResults);
		}
	};

	const onInputChange = (e) => {
		setSearchValue(e.target.value);
	};

	const clearSearchValue = () => {
		setSearchValue('');
		setMovies([]);
		setCurrentPage('1');
		navigate('/');
	};

	const paginate = (number) => {
		setCurrentPage(number);
	};
	// console.log(searchValue);
	// console.log(movies);
	// console.log(currentPage);
	return (
		<>
			<div className='home-container'>
				<div className='form-container'>
					<h2>Search your movie here</h2>
					{/* <h2>Working on styling....</h2> */}
					<form action=''>
						<label>
							<input
								type='text'
								name='user-search'
								placeholder='Start Typing...'
								value={searchValue}
								onChange={onInputChange}
							></input>
						</label>
					</form>

					<div className='search-results'>
						{searchValue && (
							<button
								value='Clear Search'
								className='home-button'
								onClick={clearSearchValue}
							>
								Clear
							</button>
						)}
						{searchValue && check && <h3>Type atleast 3 or more characters</h3>}
						<br></br>
					</div>
				</div>
			</div>
			{!movies && <p>Your Result will be displayed here</p>}
			{movies && <MoviesList movies={movies} />}
			<Pagination
				moviesPerPage={moviesPerPage}
				totalMovies={totalMovies}
				paginate={paginate}
				searchMovies={searchMovies}
				searchValue={searchValue}
			/>
		</>
	);
};
