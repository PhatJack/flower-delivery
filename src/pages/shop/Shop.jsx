import React, { useContext, useState } from 'react'
import { Img, RosesAndGerberas, heroFreshFlower, roseDelight } from '../../assets/img/freshFlower'
import { RiShoppingBag3Fill } from 'react-icons/ri'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { shopAll } from '../../data/shopData';
import { CategoryCandel } from '../../assets/img/candels';
import { BsGrid3X3Gap } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { ThemeContext } from '../../context/ThemeContext';
import { useThemeContext } from '../../hook/useThemeContext';
const Shop = () => {

	const [hover, setHover] = useState(false);

	const handleHover = () => {
		setHover(!hover)
	}

	// const 

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

	const [state, dispatch] = useThemeContext()
	console.log(state)

	const getFilteredItems = () => {
		return shopAll.filter((item) => item.category === category)
	}

	return (
		<div className='flex xl:flex-row flex-col'>
			<div className="flex flex-col xl:w-[40%]">
				{categoryFilter.map((item, index) => (
					<div className="w-full h-[550px] border-l border-b border-black relative">
						<Link onClick={() => setCategory(item.id)}>
							<img src={item.img} alt="" className='w-full h-full object-cover aspect-square' loading='lazy' />
							<span className='flex justify-center items-center w-full h-full bg-black/[0.15] absolute top-0 left-1/2 -translate-x-1/2 my-auto text-5xl text-white text-center font-semibold'>{item.title}</span>
						</Link>
					</div>
				))}
			</div>
			<div className="flex w-[60%] flex-col">
				<div className="flex border-x border-b border-black px-4 py-3 justify-between items-center">
					<div className='flex items-center gap-2'>
						<button>
							<BsGrid3X3Gap size={25} className='text-gray-500 hover:text-black transition-all' onClick={() => dispatch({ type: "SET_GRIDVIEW", value: true })} />
						</button>
						<button>
							<RxHamburgerMenu size={25} className='text-gray-500 hover:text-black transition-all' onClick={() => dispatch({ type: "SET_GRIDVIEW", value: false })} />
						</button>
					</div>
					<select name="sort" id="" className='border border-black p-3 appearance-none cursor-pointer'>
						<option value="ascending">Sort by ascending</option>
						<option value="descending">Sort by descending</option>
						<option value="popularity">Sort by popularity</option>
						<option value="highTolow">Sort by price: High to low</option>
						<option value="lowTohigh">Sort by price: Low to high</option>

					</select>
				</div>
				{state.grid_view ? (
					getFilteredItems().length === 0 ? (
						<div className="w-[60%] max-h-[175vh] border-l border-black flex justify-center items-center text-5xl">No items found.</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
							{getFilteredItems().map((item, index) => (
								<Link to={`/flower-delivery/shop/product/${item.id}`} key={item.id}>
									<div
										key={index} // Add a key prop to avoid React warning
										className={`aspect-square relative border-l border-b border-black overflow-hidden group ${index % 3 === 2 || index === getFilteredItems().length - 1 ? 'border-r' : ''
											} `}
									>
										<img src={item.img} alt="" className="w-full h-full object-cover aspect-square" loading='lazy' />
										<div className="w-full absolute bottom-full group-hover:bottom-2 transition-all duration-500 px-3">
											<div className="flex flex-col gap-2 justify-center items-center w-full text-center bg-white/80 shadow-md p-2 bottom-full">
												<p className="flower-name text-base text-black">{item.title}</p>
												<p className={`price text-black/70`}>price ${item.price}</p>
											</div>
										</div>
										<div className="flex flex-col justify-center gap-1 items-center absolute top-[25%] -right-16 group-hover:right-0 transition-all duration-500">
											<span className={`bg-white/70 p-2 transition-all duration-500 shadow-md text-black hover:bg-black hover:text-white`}>
												<RiShoppingBag3Fill size={28} />
											</span>
											<span className={`bg-white/70 p-2 transition-all duration-500 shadow-md text-black hover:bg-black hover:text-white`}>
												<AiFillHeart size={28} />
											</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					)
				)
					:
					(
						<div className="border-x border-black ">
							<div className="grid grid-cols-1">
								{getFilteredItems().map((item, index) => (
									<Link to={`/flower-delivery/shop/product/${item.id}`} key={item.id}>
										<div className="flex border-b border-black gap-3 w-full">
											<div className="w-[300px] h-[300px] border-r border-black max-w-[35%] cursor-pointer">
												<img src={item.img} alt="" className='w-full h-full object-cover' />
											</div>
											<div className="product-content p-5 flex flex-col gap-3 max-w-[60%]">
												<span className="name block text-2xl">{item.title}</span>
												<span className="price block text-xl">$ {item.price}</span>
												<p className="description mb-5">
													Culpa aliquip ea ut elit id ea.Elit ea reprehenderit commodo exercitation reprehenderit mollit.Ea esse quis et ipsum eiusmod commodo.
													Sunt nostrud dolor magna tempor eiusmod do anim.
												</p>
												<div className="flex justify-start items-center gap-4">
													<button className='max-w-[70%] w-[50%] lg:w-[30%] uppercase px-5 py-3 text-white transition-all border border-black bg-black hover:bg-transparent hover:text-black'>add to cart</button>
													<AiOutlineHeart size={25} className='cursor-pointer transition-all hover:text-red-500' />
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					)
				}
				{/* {getFilteredItems().length === 0 ? (
					<div className="w-[60%] max-h-[175vh] border-l border-black flex justify-center items-center text-5xl">No items found.</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
						{getFilteredItems().map((item, index) => (
							<Link to={`/flower-delivery/shop/product/${item.id}`} key={item.id}>
								<div
									key={index} // Add a key prop to avoid React warning
									className={`aspect-square relative border-l border-b border-black overflow-hidden group ${index % 3 === 2 || index === getFilteredItems().length - 1 ? 'border-r' : ''
										} `}
								>
									<img src={item.img} alt="" className="w-full h-full object-cover aspect-square" loading='lazy' />
									<div className="w-full absolute bottom-full group-hover:bottom-2 transition-all duration-500 px-3">
										<div className="flex flex-col gap-2 justify-center items-center w-full text-center bg-white/80 shadow-md p-2 bottom-full">
											<p className="flower-name text-base text-black">{item.title}</p>
											<p className={`price text-black/70`}>price ${item.price}</p>
										</div>
									</div>
									<div className="flex flex-col justify-center gap-1 items-center absolute top-[25%] -right-16 group-hover:right-0 transition-all duration-500">
										<span className={`bg-white/70 p-2 transition-all duration-500 shadow-md text-black hover:bg-black hover:text-white`}>
											<RiShoppingBag3Fill size={28} />
										</span>
										<span className={`bg-white/70 p-2 transition-all duration-500 shadow-md text-black hover:bg-black hover:text-white`}>
											<AiFillHeart size={28} />
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				)} */}
			</div>
		</div>
	)
}

export default Shop