import React, { useState } from 'react'
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import './index.css'
import Card from '../Card';

type SearchProps = {
	data: any,
	onResultClick: (e: string) => any
};

type restaurant = {
	state: string,
	restaurant_name: string
}

export default function SearchInput(props: SearchProps) {
	const [search, setSearch] = useState("");

	const resultBox = () => {
		const data = props.data;
		return (
			data.map((item: restaurant, idx: number) => {
				if (search === "") {
					return (
						<Card
							key={idx}
							icon={
								<IconContext.Provider value={{ color: "#FFF", size: "1em" }}>
									<FaMapMarkerAlt />
								</IconContext.Provider>
							}
							value={item.state}
							onClick={(e) => props.onResultClick(e)}
						/>
					)
				}
				if (item.state.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())) {
					return (
						<Card
							key={idx}
							icon={
								<IconContext.Provider value={{ color: "#FFF", size: "1em" }}>
									<FaMapMarkerAlt />
								</IconContext.Provider>
							}
							value={item.state}
							onClick={(e) => props.onResultClick(e)}
						/>
					)
				}
				return <></>
			})
		)
	};

	return (
		<div className='component-container'>
			<div className='input-container'>
				<input
					placeholder='Search Places'
					value={search}
					onChange={(v) => setSearch(v.target.value)}
				/>
				<IconContext.Provider value={{ color: "#fab949", size: "1em" }}>
					<FaSearch />
				</IconContext.Provider>
			</div>
			{resultBox()}
		</div>
	)
}
