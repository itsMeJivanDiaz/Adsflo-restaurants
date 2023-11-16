import React, { useEffect, useState, useCallback } from 'react'
import './index.css'
import SearchInput from '../../components/SearchInput'
import getRestaurants from '../../api'
import { FaTimes, FaChevronCircleRight, FaBuilding } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useWindowWidth } from '@react-hook/window-size'
import Card from '../../components/Card';

type restaurant = {
	state: string,
	restaurant_name: string
}

export default function Home() {

	const [data, setData] = useState([])
	const [showMenu, setShowMenu] = useState(false)
	const [selected, setSelected] = useState("");

	const fetchRestaurants = useCallback(async () => {
		const result = await getRestaurants();
		
		if (!result) {
			return;
		}

		const groupedByState = result.reduce((item: any, current: restaurant) => {
			const state = current.state
			const restaurantName = current.restaurant_name;
			let existingStateEntry = item.find((entry: restaurant)  => entry.state === state);
			if (!existingStateEntry) {
					item.push({ state, restaurant_names: [restaurantName] });
			} else {
				existingStateEntry.restaurant_names.push(restaurantName);
			}
			return item
		}, [])

		setData(groupedByState);
	}, []);

	useEffect(() => {
		fetchRestaurants();
	}, [ fetchRestaurants ]);

	const windowWidth =  useWindowWidth();

	const renderMenu = () => {
		if (showMenu || windowWidth > 600) {
			return (
				<div className="categories-list">
					<div className="close-btn-container">
						<button 
							className='close-btn'
							onClick={() => setShowMenu(false)}
						>
							<IconContext.Provider value={{ color: "#FFF", size: "1.2em" }}>
								<FaTimes />
							</IconContext.Provider>
						</button>
					</div>
					<SearchInput
						onResultClick={(e) => {
							setSelected(e)
							setShowMenu(false)
						}}
						data={data}
					/>
				</div>
			)
		}
		return <></>
	}

	const displayRestaurants = () => {
		const find: any = data.find((entry: {state: string, restaurant_names: Array<string>}) => entry.state === selected)
		if (find) {
			const restos = find.restaurant_names;
			return restos.map((name: string, idx: number) => (
				<Card
					key={idx}
					value={name}
					icon={
						<IconContext.Provider value={{ color: "#FFF", size: "1.2em" }}>
							<FaBuilding />
						</IconContext.Provider>
					}
					onClick={() => {}}
				/>
			))
		}
		return <></>
	};

	return (
		<div className="container">
			<div className="header">
				<button 
					className='open-btn'
					onClick={() => setShowMenu(true)}
				>
					<IconContext.Provider value={{ color: "#FFF", size: "1.2em" }}>
						<FaChevronCircleRight />
					</IconContext.Provider>
				</button>
			</div>
			<div className="values-list">
				<h1 className="title">AdsfloResto. @{selected}</h1>
				{displayRestaurants()}
			</div>
			{renderMenu()}
		</div>
	)
}
