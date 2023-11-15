import React, { useEffect, useState, useCallback } from 'react'
import './index.css'
import SearchInput from '../../components/SearchInput'
import getRestaurants from '../../api'

export default function Home() {

	const [data, setData] = useState([]);

	const fetchRestaurants = useCallback(async () => {
		const result = await getRestaurants();
		console.log(result);
	}, []);

	useEffect(() => {
		fetchRestaurants();
	}, [ fetchRestaurants ]);

	return (
		<div className="container">
			<div className="header-title">
				<h1 className="title">AdsfloResto.</h1>
			</div>
			<div className="values-list">
				
			</div>
			<div className="categories-list">
				<SearchInput
					value={"123"}
				/>
			</div>
		</div>
	)
}
