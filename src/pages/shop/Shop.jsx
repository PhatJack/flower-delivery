import React, { useState } from 'react'
import { Img, heroFreshFlower, roseDelight } from '../../assets/img/freshFlower'

const Shop = () => {

	const [hover,setHover] = useState(false);
	
	const handleHover = () => {
		setHover(!hover)
	}

	return (
		<div className='flex xl:flex-row flex-col'>
			<div className="flex flex-col xl:w-[40%]">
				<div className="w-full h-[762px] border-l border-b border-black relative">
					<img src={heroFreshFlower} alt="" className='w-full h-full object-cover aspect-square' />
					<span className='flex justify-center items-center w-full h-full bg-black/[0.15] absolute top-0 left-1/2 -translate-x-1/2 my-auto text-5xl text-white text-center font-semibold'>Fresh Flower</span>
				</div>
				<div className="w-full h-[762px] border-l border-b border-black relative">
					<img src={Img} alt="" className='w-full h-full object-cover aspect-square' />
					<span className='flex justify-center items-center w-full h-full bg-black/[0.15] absolute top-0 left-1/2 -translate-x-1/2 my-auto text-5xl text-white text-center font-semibold'>Dried Flower</span>
				</div>

			</div>
			<div className="grid grid-cols-3 xl:w-[60%]">
				{[...Array(17)].map((item, index) => (
					<div className={`aspect-square relative border-l border-b border-black overflow-hidden group cursor-pointer ${(index % 3 === 2 || index == 16) ? 'border-r' : ''} `}>
						<img src={roseDelight} alt="" className='w-full h-full object-cover aspect-square' />
						<div className="absolute flex flex-col gap-2 justify-center items-center w-full text-center bg-black/60 p-3 bottom-full group-hover:bottom-0 transition-all duration-500">
							<p className='flower-name text-base text-white'>Rose Delight</p>
							<p className={`price text-white/70`}>
								price $70
							</p>
						</div>
						<div className="">
							
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Shop