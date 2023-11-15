import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import './index.css'

type SearchProps = {
	value: string
};

export default function SearchInput(props: SearchProps) {
	return (
		<div className='input-container'>
			<input
				placeholder='Search Places'
			/>
			<IconContext.Provider value={{ color: "#fab949", size: "1em" }}>
				<FaSearch />
			</IconContext.Provider>
		</div>
	)
}
