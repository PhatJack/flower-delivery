import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../hook/useThemeContext'

const CardCategory = ({ text ,children,category}) => {

	const [state, dispatch] = useThemeContext()
	// console.log(state.category)

	return (
		<div className="flex justify-around items-center w-full h-full flex-col">
			<p className='p-6 2xl:text-5xl md:text-4xl text-2xl'>
				{text}
			</p>
			<div className="flex flex-[0_0_1] items-end">
				<Link
					className='flex md:text-lg justify-center items-center gap-1 font-medium relative' to={`/shop`}
					onClick={() => dispatch({type: "CATEGORY",value: category})}
					>
					Shop now
					{children}
				</Link>
			</div>
		</div>
	)
}

export default CardCategory