import React from 'react'
import { Link } from 'react-router-dom'

const AboutHome = () => {
	return (
		<section className='wrapper'>
			<div className="w-full xl:w-1/2 xl:border-r border-black xl:border-b-[0px] border-b">
				<div className="md:p-20 px-4 py-20">
					<h1 className='md:text-6xl text-4xl tracking-wide font-semibold !leading-[1.2]'>About us</h1>
				</div>
			</div>
			<div className="w-full xl:w-1/2 border-r border-black">
				<div className="md:p-20 px-4 py-20">
					<div className="flex flex-col gap-4 mb-16">
						<span className='uppercase'>Our story</span>
						<h2 className='md:text-5xl text-4xl leading-tight font-semibold my-3'>Jack Phat Nguyen</h2>
						<p className='text-base w-[85%]'>
							We are a modern local floral studio, which specializes in the design and delivery of unique bouquets.
							We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers,
							so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets,
							collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere.
							Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.
						</p>
					</div>
					<Link className='py-4 px-6 border-black border hover:text-white relative swipe-slide' to={"/about"}>
						Learn more
					</Link>
				</div>
			</div>
		</section>
	)
}

export default AboutHome