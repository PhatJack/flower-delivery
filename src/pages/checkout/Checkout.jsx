import React from 'react'
import {BlommingLove} from '../../assets/img/driedFlower'

const Checkout = () => {
	return (
		<div className='wrapper'>
			<div className="w-full xl:w-1/2 border-r border-black">
				<div className="navigation flex">
					
				</div>
			</div>
			<div className="w-full xl:w-1/2 bg-gray-100 border-r border-black">
				<div className="px-20 py-10">
					<span className='uppercase text-sm mb-8 block'>order summary</span>
					<div className="flex gap-3 pb-5 border-b">
						<div className="aspect-square w-36 h-36 border border-black">
							<img src={BlommingLove} alt="" className='w-full h-full object-cover ' />
						</div>
						<div className="">
						</div>
					</div>
					<p className='py-3'>If you have our gift card, enter the code to get discounts</p>
					<div className="flex gap-3 py-5">
						<input type="text" name="" id="" className='w-1/2 border p-3' placeholder='Gift card' />
						<button className='w-1/2 uppercase px-5 py-3 bg-black text-white transition-all border border-black hover:bg-transparent hover:text-black'>apply</button>
					</div>
					<div className="border-y py-7 flex flex-col gap-5">
						<div className="flex justify-between items-center">
							<span className='block'>Subtotal</span>
							<span className="block">$100</span>
						</div><div className="flex justify-between items-center">
							<span className='block'>Shipping</span>
							<span className="block">Calculated at next step</span>
						</div>
					</div>
					<div className="flex justify-between items-center flex-col h-52 py-4 flex-[1_0_0]">
						<div className="flex justify-between items-center w-full">
							<span className='block text-base'>Total</span>
							<span className="block text-lg">$100</span>
						</div>
						<p>Secure Checkout</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Checkout