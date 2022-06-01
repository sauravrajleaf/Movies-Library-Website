import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { PublicListItems } from "./PublicListItems";

const PublicListPage = () => {
	const [sharedData, setSharedData] = useState([]);
	const [copySuccess, setCopySucess] = useState("Click to Copy URL");
	const params = useParams();
	const id = params.id;
	const username = params.username;
	useEffect(() => {
		getShareData(id);
	}, []);

	const getShareData = async (id) => {
		const res = await axios.get(`/api/share/${id}`);

		// console.log("I AM IN PUBLIC LIST PAGE");
		// console.log(res.data);
		setSharedData(res.data);
	};
	console.log(sharedData);

	const copyToClip = async () => {
		await navigator.clipboard.writeText(window.location.href);
		setCopySucess("copied");
		setTimeout(() => {
			setCopySucess("Click to Copy URL");
		}, 2000);
	};
	return (
		<div>
			<h1>{username.toUpperCase()}'s Collection</h1>
			{/* <h1>PublicListPage {params.id}</h1> */}
			<div className='copy-link' onClick={copyToClip}>
				<button className='add-to-favorite-button'>{copySuccess}</button>
			</div>
			<div className='movies-container'>
				{" "}
				{sharedData !== null &&
					sharedData.map((item) => (
						<PublicListItems item={item} key={item.id} />
						// <h1>{myList.Title}</h1>
					))}
			</div>
		</div>
	);
};

export default PublicListPage;
