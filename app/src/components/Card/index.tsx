import React from 'react'
import './index.css'

type CardProps = {
	value: string,
	icon: any,
	onClick: (value: string) => any
}

export default function Card(props: CardProps) {
	return (
		<button 
			className='card-btn'
			onClick={() => props.onClick(props.value)}
		>
			{props.icon}
			<p className='label'>{props.value}</p>
		</button>
	)
}
