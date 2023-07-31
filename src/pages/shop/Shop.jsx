import React, { useState } from 'react'
import { Img, heroFreshFlower, roseDelight } from '../../assets/img/freshFlower'
import { RiShoppingBag3Fill } from 'react-icons/ri'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { shopAll } from '../../data/shopData';
import { CategoryCandel } from '../../assets/img/candels';
const Shop = () => {

	const [hover, setHover] = useState(false);

	const handleHover = () => {
		setHover(!hover)
	}

	const [categoryFilter] = useState([
		{
			img: heroFreshFlower,
			title: "Fresh Flower",
			id: "freshflower"
		},
		{
			img: Img,
			title: "Dried Flower",
			id: "driedflower"
		},
		{
			img: CategoryCandel,
			title: "Candels",
			id: "candel"
		}
	])
	const [category, setCategory] = useState(categoryFilter[0].id);

	const getFilteredItems = () => {
		return shopAll.filter((item) => item.category === category)
	}

	return (
		<div className='flex xl:flex-row flex-col'>
			<div className="flex flex-col xl:w-[40%]">
				{categoryFilter.map((item, index) => (
					<div className="w-full h-[550px] border-l border-b border-black relative">
						<Link onClick={() => setCategory(item.id)}>
							<img src={item.img} alt="" className='w-full h-full object-cover aspect-square' loading='lazy'/>
							<span className='flex justify-center items-center w-full h-full bg-black/[0.15] absolute top-0 left-1/2 -translate-x-1/2 my-auto text-5xl text-white text-center font-semibold'>{item.title}</span>
						</Link>
					</div>
				))}
			</div>
			{getFilteredItems().length === 0 ? (
				<div className="w-[60%] max-h-[175vh] border-l border-black flex justify-center items-center text-5xl">No items found.</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full xl:w-[60%]">
					{getFilteredItems().map((item, index) => (
						<div
							key={index} // Add a key prop to avoid React warning
							className={`aspect-square relative border-l border-b border-black overflow-hidden group cursor-pointer ${index % 3 === 2 || index === getFilteredItems().length - 1 ? 'border-r' : ''
								} `}
						>
							<img src={item.img} alt="" className="w-full h-full object-cover aspect-square" loading='lazy' />
							<div className="absolute flex flex-col gap-2 justify-center items-center w-full text-center bg-black/60 p-3 bottom-full group-hover:bottom-0 transition-all duration-500">
								<p className="flower-name text-base text-white">{item.title}</p>
								<p className={`price text-white/70`}>price ${item.price}</p>
							</div>
							<div className="flex flex-col justify-center gap-1 items-center absolute top-[25%] -right-16 group-hover:right-0 transition-all duration-500">
								<span className={`bg-black/60 p-2 transition-all duration-500 border-y border-l border-black text-white hover:bg-white hover:text-black`}>
									<RiShoppingBag3Fill size={28} />
								</span>
								<span className={`bg-black/60 p-2 transition-all duration-500 border-y border-l border-black text-white hover:bg-white hover:text-black`}>
									<AiFillHeart size={28} />
								</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Shop