import React, { useState } from 'react'
import { BlommingLove } from '../../assets/img/driedFlower'
import { Link, NavLink } from 'react-router-dom'
import { AiFillApple } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

const Checkout = () => {

	const [shippingDetail, setShippingDetail] = useState(false);
	const [payment, setPayment] = useState(false)

	return (
		<div className='wrapper'>
			<div className="w-full xl:w-1/2 border-r border-black order-2 xl:order-none xl:border-t-0 border-t">
				<div className="px-5 md:px-20 py-10">
					<nav className="flex text-black" aria-label="Breadcrumb">
						<ol className="inline-flex items-center space-x-1 md:space-x-3 uppercase">
							<li className="inline-flex items-center">
								<Link to={""} 
									onClick={() => setShippingDetail(!shippingDetail)}
									className={`inline-flex items-center text-sm font-medium hover:text-blue-600 ${shippingDetail ? 'text-gray-400' : 'text-black'}`}>
									Information
								</Link>
							</li>
							<li>
								<div className="flex items-center">
									<svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
									</svg>
									<Link to={""} 
									onClick={() =>  setShippingDetail(!shippingDetail)}
									className={`ml-1 text-sm font-medium hover:text-blue-600 md:ml-2 transition-all duration-500 ${(!shippingDetail) ? 'text-gray-400' : 'text-black'}`}>Shipping</Link>
								</div>
							</li>
							<li aria-current="page">
								<div className="flex items-center md:flex-nowrap flex-wrap">
									<svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
									</svg>
									<span className={`ml-1 text-sm font-medium md:ml-2 ${payment ? 'text-black' : 'text-gray-400'}`}>Payment</span>
								</div>
							</li>
						</ol>
					</nav>
					<div className={`flex flex-col h-full`}>
						<div className="bg-gray-300 text-black p-10 mt-8 mb-6">
							Already have an account? <Link to={"/login"} className='underline'>Log in</Link> for faster checkout
						</div>
						<div className={`flex flex-col pb-5 border-b`}>
							<span className={`block mb-3 text-lg ${shippingDetail ? 'text-gray-300' : 'text-black'}`}>1 Contact Information</span>
							<div className={`flex flex-col gap-3 overflow-hidden transition-all duration-500 ${shippingDetail ? 'max-h-0' : 'max-h-full'}`}>
								<input type="text" name="" id="" className='p-4 border text-black' placeholder='Your name' />
								<input type="email" name="" id="" className='p-4 border text-black' placeholder='Your email' />
								<input type="tel" name="" id="" className='p-4 border text-black' placeholder='Your phone' />
								<button
									onClick={() => setShippingDetail(!shippingDetail)}
									className='w-full uppercase px-5 py-3 bg-black text-white transition-all border border-black hover:bg-transparent hover:text-black mt-5'>Continue to shipping</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col py-6 border-b">
						<span className={`block text-lg mb-3 ${!shippingDetail ? 'text-gray-300' : 'text-black'}`}>2 Shipping Detail</span>
						<div className={`flex flex-col w-full gap-3 overflow-hidden transition-all duration-500 ${!shippingDetail ? 'h-0' : 'h-full'}`}>
							<input type="text" className='w-full p-4 border text-black' placeholder='Recipients Name' />
							<input type="tel" className='w-full p-4 border text-black' placeholder='Recipients Phone number *' />
							<input type="date" className='w-full p-4 border text-black' placeholder='Data of Delivery ' />
							<div className="flex gap-3">
								<input type="text" className='w-full p-4 border text-black' placeholder='Street' />
								<input type="text" className='w-full p-4 border text-black' placeholder='Apartment number' />
							</div>
							<div className="flex items-center gap-3">
								<input type="checkbox" name="" id="" className='w-5 h-5' />
								<label htmlFor="">I don't know the address, please call the recipient.</label>
							</div>
							<button
								onClick={() => setPayment(!payment)}
								className='w-full uppercase px-5 py-3 bg-black text-white transition-all border border-black hover:bg-transparent hover:text-black'>Continue to payment</button>
						</div>
					</div>
					<div className="flex flex-col py-6 border-b">
						<span className={`block text-lg ${payment ? 'text-black' : 'text-gray-300'}`}>3 Payment</span>
						<div className={`flex flex-col w-full overflow-hidden gap-3 transition-all duration-500 ${payment ? 'h-full' : 'h-0'}`}>
							<p className='mt-3 mb-2'>Pay by card. Your payment is secure.</p>
							<input type="number" name="" id="" className='p-4 border text-black' placeholder='Card number' />
							<div className="flex gap-3">
								<input type="text" className='w-full p-4 border text-black' placeholder='MM / YY' />
								<input type="text" className='w-full p-4 border text-black' placeholder='CVV Code' />
							</div>
							<button
								className='w-full uppercase px-5 py-3 bg-black text-white transition-all border border-black hover:bg-transparent hover:text-black mt-2'>make a purchase</button>
							<span className='my-3'>Or pay using:</span>
							<div className="flex gap-3">
								<button
									className='w-full flex justify-center items-center gap-2 uppercase px-5 py-3 text-black transition-all border border-black hover:bg-black hover:text-white mt-2'>
									<AiFillApple size={22} />
									Apple Pay</button>
								<button
									className='w-full flex justify-center items-center gap-2 uppercase px-5 py-3 text-black transition-all border border-black hover:bg-black hover:text-white mt-2'>
									<FcGoogle size={22} />
									Google Pay</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full xl:w-1/2 bg-gray-100 border-r border-black">
				<div className="px-5 md:px-20 py-10">
					<span className='uppercase text-sm mb-8 block'>order summary</span>
					<div className="flex gap-3 pb-5 border-b">
						<div className="aspect-square w-36 h-36 border border-black">
							<img src={BlommingLove} alt="" className='w-full h-full object-cover ' />
						</div>
						<div className="flex justify-between items-center w-full">
							<div className="flex flex-col gap-3">
								<span className="block text-lg">Blomming Love</span>	
								<span className="block text-sm">Quantity (1)</span>
							</div>
							<span className="block text-base">$100</span>

						</div>
					</div>
					<p className='py-3'>If you have our gift card, enter the code to get discounts</p>
					<div className="flex flex-wrap md:flex-nowrap gap-3 py-5">
						<input type="text" name="" id="" className='w-full md:w-1/2 border p-3' placeholder='Gift card' />
						<button className='w-full md:w-1/2 uppercase px-5 py-3 bg-black text-white transition-all border border-black hover:bg-transparent hover:text-black'>apply</button>
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