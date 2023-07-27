import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const CardCategory = ({ text }) => {
	return (
		<div className="flex justify-around items-center w-full h-full flex-col">
			<p className='p-6 2xl:text-5xl md:text-4xl text-2xl'>
				{text}
			</p>
			<div className="flex flex-[0_0_1] items-end">
				<button className='flex md:text-lg justify-center items-center gap-1 font-medium'>
					Shop now
					{/* <BsArrowRight size={20} /> */}
				</button>
			</div>
		</div>
	)
}

export default CardCategory