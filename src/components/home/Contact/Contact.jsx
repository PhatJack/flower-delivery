import React from 'react'
import { FrontHouseLogo } from '../../../assets'
import { TbBrandFacebook, TbBrandPinterest, TbBrandLinkedin, TbBrandInstagram, TbBrandLeetcode } from 'react-icons/tb'
import { Link } from 'react-router-dom'
const Contact = () => {

	const menuSocialMedia = [
		{
			item: TbBrandFacebook,
			link: "https://www.facebook.com/jack.willam2003/"
		},
		{
			item: TbBrandInstagram,
			link: "https://www.instagram.com/tuila_tien_phat/"
		},
		{
			item: TbBrandLinkedin,
			link: "https://www.linkedin.com/in/phat-nguyen-tien-733397286/"
		},
		{
			item: TbBrandPinterest,
			link: "https://www.pinterest.co.uk/jackvuabongro/"
		},
		{
			item: TbBrandLeetcode,
			link: "https://leetcode.com/PhatJack/"
		}
	]

	return (
		<div className='wrapper'>
			<div className="w-full flex flex-col xl:w-1/2 order-2 xl:order-none xl:border-r border-black">
				<div className="md:p-20 px-4 py-20 border-b border-black">
					<h1 className='first-letter:uppercase md:text-4xl text-2xl tracking-wide font-semibold mb-7'>To Contact Us</h1>
					<p className='mb-4'>We will call you back</p>
					<div className="flex justify-start items-center gap-5 md:flex-nowrap flex-wrap">
						<input type="text" className='px-5 py-3 border border-gray-300 w-full md:w-3/4' placeholder='+84 XXX-XXX-XXX' />
						<button className='w-full md:w-1/2 uppercase px-5 py-3 bg-black text-white transition-all border-y border-black hover:bg-transparent hover:text-black'>book a call</button>
					</div>
				</div>
				<div className="h-full flex sm:flex-row flex-col w-full">
					<div className="sm:w-1/2 flex flex-col justify-center items-center border-r border-black">
						<h1 className='px-6 py-3 font-medium text-2xl tracking-wide'>Phone</h1>
						<div className="w-full flex flex-col gap-6 justify-center items-center border-t border-black p-6 flex-[1_0_0]">
							<p className='md:text-base text-sm'>
								<Link to="tel:+84344248396">
									+84 344-248-396
								</Link>
							</p>
							<p className='md:text-base text-sm'><Link to="tel:+84344248396">
								+84 123-456-789
							</Link></p>
						</div>
					</div>
					<div className="sm:w-1/2 flex flex-col justify-center items-center sm:border-t-0 border-t border-black">
						<h1 className='px-6 py-3 font-medium text-2xl tracking-wide'>Address</h1>
						<div className="flex flex-col gap-6 w-full justify-center items-center border-t border-black p-6 flex-[1_0_0]">
							<p className='uppercase md:text-base text-sm'>opening hours: 8 to 11 p.m.</p>
							<p className='md:text-base text-sm'>15/4 21 Street,Go Vap District,Viet Nam </p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full xl:w-1/2 flex flex-col xl:border-b-[0px] border-black border-b">
				<div className="w-full h-full border-r border-black">
					<img src={FrontHouseLogo} alt="" className='w-full h-full object-cover' />
				</div>
				<div className="flex w-full border-t border-black border-r">
					<div className="w-1/2 px-10 py-4 text-center text-xl md:text-2xl border-r border-black">
						<h1 className='font-semibold'>Follow us</h1>
					</div>
					<div className="w-1/2 px-4 md:px-8">
						<ul className='w-full h-full flex justify-around items-center'>
							{menuSocialMedia.map((item, index) => (
								<li key={index}>
									<Link to={item.link} target='_blank'>
										<item.item className='text-2xl md:text-3xl' />
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact