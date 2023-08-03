import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FreshFlower } from '../../assets'
import { Link } from 'react-router-dom'
const HomeCart = ({ handleCart, clickCart }) => {

	// console.log(clickCart)

	return (
		<div className={`w-full h-screen md:w-1/2 fixed bg-white border-x border-b border-black top-0 bottom-0 z-20 !visible transition-all duration-500 ${clickCart ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'}`}>
			<div className="py-4 pl-5 pr-8 2xl:pr-20 border-b border-black">
				<div className="flex justify-between items-center">
					<span className='text-lg'>
						Shopping Cart
					</span>
					<AiOutlineClose onClick={() => handleCart()} size={25} className='cursor-pointer hover:rotate-[360deg] duration-500 transition-all rotate-0' />
				</div>
			</div>
			<div className="w-full h-[434px] overflow-y-scroll border-b border-black">
				{[1, 2, 3, 4].map((item, index) => (
					<div className="px-5 py-10 border-b border-black" key={index}>
						<div className="flex justify-start items-center gap-5 md:flex-nowrap flex-wrap">
							<div className="w-40 h-40 border border-black">
								<img src={FreshFlower} alt="" className='w-full h-full object-cover' />
							</div>
							<div className="flex justify-between items-center w-full md:w-3/4">
								<div className="detail flex flex-col gap-1">
									<span className='block text-xl '>Rose Delight</span>
									<p className='quantity'>Quanity(1)</p>
									<span className="price block font-semibold text-lg">$100</span>
								</div>
								<button className='text-white p-4 transition-all duration-150 border-red-500 bg-red-500 border hover:bg-transparent hover:text-red-500'>
									Remove
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="subtotal-desc pl-5 pr-8 2xl:pr-20 py-6 border-b border-black">
				<div className="flex justify-between items-center">
					<p className='text-lg'>Subtotal</p>
					<span className='block text-xl font-medium'>$100</span>
				</div>
			</div>
			<div className="px-5 py-8 border-b border-black">
				<textarea name="" id="" rows="5" placeholder='Any message' className='w-[92%] h-48 md:h-20 focus:outline-none text-base'></textarea>
			</div>
			<div className="hidden md:block py-9">
				<div className="flex flex-col justify-center items-center gap-2">
					<p>Shipping & taxes calculated at checkout</p>
					<p>Free standard shipping within JackPhat</p>
					<p>Designed with love</p>
					<p>Made by Jack Phat Nguyen</p>
				</div>
			</div>
			<Link
			to={"/checkout"}
			onClick={() => handleCart()}
			className='block text-center w-full uppercase px-5 py-5 bg-black text-white transition-all border-t border-black hover:bg-transparent hover:text-black'>Check out</Link>
		</div>
	)
}

export default HomeCart

// ${clickCart ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'}