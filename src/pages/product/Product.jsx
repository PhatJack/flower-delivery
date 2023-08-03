import React, { useState } from 'react';
import { shopAll } from '../../data/shopData';
import { RosesAndGerberas } from '../../assets/img/freshFlower';
import { Link, useParams, NavLink } from 'react-router-dom';
import { RiShoppingBag3Fill, RiSliceFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';

const Product = () => {
	const [quantity, setQuantity] = useState(1);

	const transformString = (str) => {
		return str.replace(/\b\w/g, (char) => char.toUpperCase());
	};

	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleChange = (e) => {
		var value = e.target.value.replace(/[^0-9]/, '');
		value = value === '' ? 1 : value;
		value = parseInt(value);
		setQuantity(value);
	};

	const categoryMap = {
		candel: 'Candel',
		freshflower: 'Fresh Flower',
		driedflower: 'Dried Flower',
	};

	const productID = useParams();
	const filterProduct = shopAll.find((item) => item.id === productID.id)
	const { img, title, price, category } = filterProduct
	const similarProductList = () => { return shopAll.filter((item) => item.category === category) }

	return (
		<div className="flex flex-col">
			<div className="w-full flex xl:flex-row flex-col">
				<div className="w-full xl:w-1/2 border-r border-black xl:border-b-[0px] border-b">
					<img src={img} alt="" className="w-full h-full object-cover" />
				</div>
				<div className="w-full xl:w-1/2">
					<div className="p-5 py-10 xl:px-10">
						<div className="navigation flex gap-2 items-center uppercase">
							<NavLink to={'/shop'}>{categoryMap[category] ? categoryMap[category] : 'Undefined'}</NavLink>
							<span>/</span>
							<span className="uppercase text-gray-400">{title}</span>
						</div>
						<div className="flex gap-2 items-center text-2xl md:text-4xl my-7">
							<span className="name">{transformString('roses and gerberas')}</span>
							<span>-</span>
							<span className="price">${price}</span>
						</div>
						<p className="description text-gray-600 md:text-black">
							Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and
							subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime
							flowers even
						</p>
						<div className="quantity flex gap-3 justify-start items-center my-5">
							<span>Quantity</span>
							<div className="flex justify-between items-center">
								<span onClick={handleDecrement} className='cursor-pointer w-10 text-center h-10 border border-black text-3xl font-thin'>-</span>
								<input type="text" value={quantity} onChange={handleChange} className='w-16 h-10 text-center text-2xl font-thin border-y border-black' />
								<span onClick={handleIncrement} className='cursor-pointer w-10 text-center h-10 border border-black text-3xl font-thin'>+</span>
							</div>
						</div>
						<div className="my-5">
							<p className='mb-3 text-lg'>Price options</p>
							<ul className='flex flex-col gap-2'>
								<li className='flex gap-2 items-center'>
									<input type="radio" name="price-options" id="" className='w-5 h-5' checked />
									One time purchase. Price ${price}
								</li>
								<li className='flex gap-2 items-center'>
									<input type="radio" name="price-options" id="" className='w-5 h-5' />
									Subscribe now, and save 25% on this order.
								</li>
							</ul>
						</div>
						<button className='w-full uppercase px-5 py-3 bg-black text-white transition-all border border-black hover:bg-transparent hover:text-black'>Add to cart</button>
					</div>
				</div>
			</div>
			<div className="w-full border border-black text-center xl:py-28 py-12 text-3xl xl:text-5xl">
				You may also like ...
			</div>
			<div className="overflow-hidden">
				<div className="grid grid-cols-2 md:flex w-full">
					{similarProductList().slice(0,4).map((item, index) => (
						<div
							key={index} // Add a key prop to avoid React warning
							className={`md:flex-[0_0_25%] min-w-0 aspect-square relative border-black overflow-hidden border-l group cursor-pointer md:border-b-[0px] border-b ${index == 3 ? 'border-r' : ''}`}
						>
							<img src={item.img} alt="" className="w-full h-full object-cover aspect-square" loading='lazy' />
							<div className="w-full absolute bottom-full group-hover:bottom-2 transition-all duration-500 px-3">
								<div className="flex flex-col gap-2 justify-center items-center w-full text-center bg-white/80 shadow-md p-2 bottom-full">
									<p className="flower-name text-base text-black">{item.title}</p>
									<p className={`price text-black/70`}>price ${item.price}</p>
								</div>
							</div>
							<div className="flex flex-col justify-center gap-1 items-center absolute top-[25%] -right-16 group-hover:right-0 transition-all duration-500">
								<span className={`bg-white/70 p-2 transition-all duration-500 shadow-md text-black hover:bg-black hover:text-white cursor-pointer`}>
									<RiShoppingBag3Fill size={28} />
								</span>
								<span className={`bg-white/70 p-2 transition-all duration-500 shadow-md text-black hover:bg-black hover:text-white cursor-pointer`}>
									<AiFillHeart size={28} />
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Product;
