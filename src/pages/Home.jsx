import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Fresheners } from '../assets'
import CardCategory from '../components/card/CardCategory'
import CardItem from '../components/card/CardItem'
import { FreshFlower, DriedFlower, Candel, LivePlant } from '../assets'
import WhyChooseUs from '../components/home/WhyChooseUs/WhyChooseUs'
import Contact from '../components/home/Contact/Contact'
import Services from '../components/home/Services'
import { WeddingPlace } from '../assets'
import Footer from '../components/footer/Footer'
import Hero from '../components/home/Hero'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import AboutHome from '../components/home/AboutHome'

const Home = () => {
	return (
		<div className="">
			<Hero />
			<section className="wrapper">
				<div className="hidden xl:block w-1/2 border-black border-r"></div>
				<div className="w-full xl:w-1/2 border-r border-black">
					<div className="grid grid-cols-2">
						<div className="">
							<CardCategory text="Live Plant">
								<BsArrowRight size={20} />
							</CardCategory>
						</div>
						<div className="border-black border-l">
							<CardItem src={LivePlant} />
						</div>
						<div className="border-black border-y">
							<CardItem src={Candel} />
						</div>
						<div className="border-black border-y border-l">
							<CardCategory text="Aroma Candels" category={"candel"}>
								<BsArrowLeft size={20} className='absolute -left-5' />
							</CardCategory>
						</div>
						<div className="">
							<CardCategory text="Fresheners">
								<BsArrowRight size={20} className='' />
							</CardCategory>
						</div>
						<div className="border-black border-l">
							<CardItem src={Fresheners} />
						</div>
					</div>
				</div>
			</section>
			<AboutHome />
			<WhyChooseUs />
			<Contact />
			<div className="w-full border-b border-x border-black text-center py-16">
				<h1 className='md:text-5xl text-3xl tracking-wide font-semibold !leading-[1.2]'>Our Service</h1>
			</div>
			<Services />
			<div className={`wrapper relative !`}>
				<div className="w-full h-[800px]">
					<img src={WeddingPlace} alt="" className='w-full h-full object-cover object-center' />
				</div>
				<div className="absolute bg-black/40 w-full h-full border-r border-black">
					<div className="w-full h-full flex items-center justify-center">
						<div className="w-full xl:w-[45%] md:p-20 px-4 py-20 text-center text-white">
							<div className="flex flex-col justify-center items-center gap-4">
								<span className='uppercase'>Service</span>
								<h1 className='md:text-5xl text-3xl tracking-wide font-semibold mb-5'>Flower Subscriptions</h1>
								<p >Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
								<button className='max-w-[70%] w-[50%] lg:w-[30%] uppercase px-5 py-3 text-white transition-all border border-white hover:bg-white hover:text-black mt-14'>subscribe now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home