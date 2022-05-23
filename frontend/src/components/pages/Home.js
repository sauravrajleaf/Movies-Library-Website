import React, { useEffect, useState } from "react";
import axios from "axios";

import { MoviesList } from "../movies/MoviesList";
import { Pagination } from "../layout/Pagination";

import "./Home.css";

export const Home = () => {
	const [movies, setMovies] = useState([]);
	const [check, setCheck] = useState("");
	const [searchValue, setSearchValue] = useState("");

	const [currentPage, setCurrentPage] = useState("1");
	const [moviesPerPage, setMoviesPerPage] = useState("10");
	const [totalMovies, setTotalMovies] = useState("");

	useEffect(() => {
		if (currentPage === 1) {
			searchMovies(searchValue);
		} else {
			nextPage(currentPage);
		}

		// eslint-disable-next-line
	}, [searchValue, currentPage]);

	const searchMovies = async (searchValue) => {
		const sendReq = await axios.get(`/api/data/${searchValue}`);
		if (sendReq.data.Error !== null) {
			// console.log(sendReq.data.Error);
			setCheck(sendReq.data.Error);
		}
		if (sendReq.data.Search !== null) {
			setMovies(sendReq.data.Search);
			setTotalMovies(sendReq.data.totalResults);
		}
	};
	const nextPage = async (currentPage) => {
		const sendReq = await axios.get(`/api/data/${searchValue}/${currentPage}`);
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
		setSearchValue("");
		setMovies([]);
	};

	const paginate = (number) => {
		setCurrentPage(number);
	};
	console.log(movies);
	console.log(currentPage);
	return (
		<>
			<div className='home-container'>
				<div className='form-container'>
					<h2>Search your movie here</h2>
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
							<button value='Clear Search' onClick={clearSearchValue}>
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
				nextPage={nextPage}
			/>
		</>
	);
};
