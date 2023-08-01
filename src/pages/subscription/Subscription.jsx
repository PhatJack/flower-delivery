import React from 'react'
import { FlowerAndLetter } from '../../assets/img/subscription'

const Subscription = () => {

	const heroContent = [
		{
			title: "For Yourself",
			description: "The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!"
		},
		{
			title: "As A Gift",
			description: "Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing."
		},
		{
			title: "For Business",
			description: "Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part."
		}
	]

	return (
		<div className='wrapper'>
			<div className="w-1/2 h-[800px] aspect-square">
				<img src={FlowerAndLetter} alt="" className='w-full h-full object-cover aspect-square' />
			</div>
			<div className="w-1/2">
				<div className="md:p-20 px-4 py-20">
					<h1 className='text-5xl font-semibold'>Flower Subscription</h1>
					{
						heroContent.map((item, index) => (
							<div className="flex flex-col">
								<div className="">
									<h2 className='text-lg mt-5 mb-2'>{item.title}</h2>
									<ul className='pl-10 pr-16'>
										<li className='list-disc'>
											{item.description}
										</li>
									</ul>
								</div>
							</div>
						))
					}
					<button className='max-w-[70%] w-[50%] lg:w-[30%]  uppercase px-5 py-3 text-black transition-all border border-black hover:bg-black hover:text-white mt-28'>add to cart</button>
				</div>
			</div>
		</div>
	)
}

export default Subscription