import React from 'react'
import { HeroImg } from '../../assets'
import CardCategory from '../card/CardCategory'
import CardItem from '../card/CardItem'
import { FreshFlower, DriedFlower, Candel, LivePlant } from '../../assets'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'



const Hero = () => {
	return (
		<section className="wrapper">
			<div className="w-full xl:w-1/2 xl:border-r border-black xl:border-b-[0px] border-b">
				<div className="md:px-20 px-5 pt-10 md:pt-20 pb-10 md:pb-5 flex flex-col">
					<div className="border-b border-black pb-5 2xl:pb-10 justify-start">
						<p className='relative w-full 2xl:w-3/4 mb-4'>
							<span className='md:text-6xl text-4xl tracking-wide font-semibold !leading-[1.2]'>Jack
								<br />
								Phat Nguyen</span>
						</p>
						<p className='md:text-base text-sm tracking-wide'>
							Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:

							<span className='block'>
								<i>
									Spread Joy with Our Online Flower Delivery Service
								</i>
							</span>
						</p>
					</div>
					<div className="pt-5 2xl:pt-[41px] justify-end">
						<div className="grid grid-cols-2 w-full h-full">
							<div className="w-full xl:h-64 2xl:h-96 filter grayscale-[70%] saturate-50 flex-[1_0_0] self-stretch items-start pr-5">
								<img src={HeroImg} alt="" className='w-full h-full object-cover aspect-square' />
							</div>
							<div className="flex items-end text-sm h-full border-l border-black pl-5 flex-[1_0_0]">
								<p>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full xl:w-1/2 border-r border-black">
				<div className="grid grid-cols-2">
					<div className="border-b border-black relative">
						<CardCategory text="Fresh Flower" category={"freshflower"}>
							<BsArrowRight size={20} className='' />
						</CardCategory>
					</div>
					<div className="border-black border-b border-l">
						<CardItem src={FreshFlower} />
					</div>
					<div className="">
						<CardItem src={DriedFlower} alt="" />
					</div>
					<div className="border-l border-black">
						<CardCategory text="Dried Flower" category={"driedflower"}>
							<BsArrowLeft size={20} className='absolute -left-5' />
						</CardCategory>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero