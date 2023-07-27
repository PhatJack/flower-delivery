import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { HeroImg } from '../assets'
import CardCategory from '../components/card/CardCategory'
import CardItem from '../components/card/CardItem'
import { FreshFlower, DriedFlower, Candel, LivePlant } from '../assets'
const Home = () => {
	return (
		<div className="">
			<Navbar />
			<div className="w-full flex flex-col xl:flex-row">
				<div className="w-full xl:w-1/2 border-r border-black xl:border-b-[0px] border-b">
					<div className="px-20 pt-20 flex flex-col">
						<div className="border-b border-black pb-10 justify-start">
							<p className='relative w-1/2 mb-4'>
								<h1 className='text-6xl leading-tight font-semibold'>Kyiv
									<br />
									LuxeBouquets®</h1>
							</p>
							<p>
								Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
								<p>
									<i>
										Spread Joy with Our Online Flower Delivery ServiceF
									</i>
								</p>
							</p>
						</div>
						<div className="py-7 justify-end">
							<div className="grid grid-cols-2 w-full h-full">
								<div className="w-64 h-64 2xl:w-80 2xl:h-80 filter grayscale-[70%] saturate-50 flex-[1_0_0] self-stretch">
									<img src={HeroImg} alt="" className='w-full h-full object-cover' />
								</div>
								<div className="flex items-end text-sm h-full border-l border-black pl-6 2xl:pl-16 flex-[1_0_0]">
									<p>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full xl:w-1/2">
					<div className="grid grid-cols-2">
						<div className="border-b border-black">
							<CardCategory text="Fresh Flower" />
						</div>
						<div className="">
							<CardItem src={FreshFlower} />
						</div>
						<div className="">
							<CardItem src={DriedFlower} />
						</div>
						<div className="border-l border-black">
							<CardCategory text="Dried Flower" />

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home