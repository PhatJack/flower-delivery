import React from 'react'
import { Bouquet, CEO, CandelAndBouquet, Fresheners } from '../../assets/img/about'
import { Link } from 'react-router-dom'

const About = () => {

	const items = [
		{
			title: "Expertly Crafted Bouquets",
			img: Bouquet,
			description: "At Jack Phat Nguyen, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection."
		},
		{
			title: "Bouquets, Gifts & Ambiance",
			img: CandelAndBouquet,
			description: "In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv."
		},
		{
			title: "Making Every Day Special",
			img: Fresheners,
			description: "Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts."
		}
	]

	return (
		<div className='w-full'>
			<div className="wrapper">
				<div className="w-full xl:w-1/2 border-r border-black">
					<div className="px-5 py-20 xl:p-20 h-full w-full">
						<div className="h-full flex justify-center items-center flex-col gap-4">
							<p className='text-4xl md:text-6xl tracking-wider font-semibold'>Our Story</p>
							<p className={`text-4xl md:text-6xl font-['Ballet'_,cursive] my-3`}>About</p>
							<p className='text-4xl md:text-6xl tracking-wider font-semibold'>Jack Phat Nguyen</p>
							<p className='px-10 md:px-40 text-center'>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
						</div>
					</div>
				</div>
				<div className="w-full xl:w-1/2">
					<div className="w-full h-full md:h-[850px] aspect-square filter contrast-75 grayscale-[30%]">
						<img src={CEO} alt="" className='w-full h-full object-cover aspect-square mx-auto block' />
					</div>
				</div>
			</div>
			<div className="w-full border-b border-black">
				<div className="px-5 py-20 xl:p-20 h-full w-full">
					<div className="flex flex-col justify-center items-center gap-4">
						<span className='uppercase'>Service</span>
						<h1 className='md:text-4xl text-2xl tracking-wide font-semibold mb-5'>Flower Subscriptions</h1>
						<p className='md:w-[600px] text-center'>Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska
							with the goal of bringing unique and exquisite bouquets to the people of Kyiv.
							Natalia has always had a passion for flowers and design,
							and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh,
							beautiful, and distinctive bouquets.</p>
					</div>
				</div>
			</div>
			{items.map((item, index) => (
				<div className="wrapper">
					<div className={`w-full xl:w-1/2 border-r border-black md:border-b-[0px] md:border-t-0 border-t border-b ${index == 1 ? 'order-2 border-l' : ''}`}>
						<div className="w-full h-full object-center md:h-[800px] aspect-square filter contrast-75 grayscale-[30%]">
							<img src={item.img} alt="" className='w-full h-full object-cover' />
						</div>
					</div>
					<div className="w-full xl:w-1/2">
						<div className="px-5 py-20 xl:p-20 h-full w-full md:border-x-[0px] border-x border-black">
							<div className="flex flex-col justify-start gap-4">
								<h1 className='md:text-4xl text-2xl tracking-wide font-semibold mb-5'>{item.title}</h1>
								<p className='md:w-[600px]'>{item.description}</p>
							</div>
						</div>
					</div>
				</div>
			))}
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-full xl:w-[50%] md:p-20 px-4 py-20 text-center text-black md:border-x-0 border-x border-black">
					<div className="flex flex-col justify-center items-center gap-4">
						<h1 className='md:text-5xl text-3xl tracking-wide font-semibold mb-5'>Discover Our Beautiful Bouquets</h1>
						<p>Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</p>
						<Link 
						to={"/flower-delivery/shop"}
						className='max-w-[70%] w-[50%] lg:w-[30%] uppercase px-5 py-3 text-white transition-all border border-black bg-black hover:bg-transparent hover:text-black mt-14'>shop now</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About