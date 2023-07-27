import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const CardCategory = ({ text }) => {
	return (
		<div className="flex justify-around items-center w-full h-full flex-col">
			<p className='p-6 2xl:text-5xl text-4xl'>
				{text}
			</p>
			<div className="flex flex-[0_0_1] items-end">
				<button className='flex text-lg justify-center items-center gap-1'>
					Shop now
					<BsArrowRightShort size={20} />
				</button>
			</div>
		</div>
	)
}

export default CardCategory