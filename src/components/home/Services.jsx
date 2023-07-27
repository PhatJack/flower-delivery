import React from 'react'
import { ImgService } from '../../assets'

const Services = () => {
	return (
		<section className='wrapper'>
			<div className="w-full xl:w-1/2 xl:border-r border-black xl:border-b-[0px] border-b">
				<div className="w-full h-full">
					<img src={ImgService} alt="" className='w-full h-full object-cover filter grayscale-[30%]' />
				</div>
			</div>
			<div className="w-full xl:w-1/2 flex items-center justify-center">
				<div className="w-full md:w-[70%] md:p-20 px-4 py-20 text-center">
					<div className="flex flex-col justify-center items-center gap-4">
						<span className='uppercase'>Service</span>
						<h1 className='md:text-4xl text-2xl tracking-wide font-semibold mb-5'>Flower Subscriptions</h1>
						<p>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
						<button className='w-1/2 md:w-full uppercase px-5 py-3 bg-black text-white border-y transition-all border-black hover:bg-transparent hover:text-black mt-14'>subscribe now</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services