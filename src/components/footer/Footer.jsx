import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandFacebook, TbBrandPinterest, TbBrandLinkedin, TbBrandInstagram, TbBrandLeetcode } from 'react-icons/tb'

const Footer = () => {

	const menuShop = [
		"All Product", "Fresh Flower", "Dried Flower", "Live Plants", "Designer Vases", "Aroma Candles", "Fresheners Diffuser"
	]
	const menuAboutUs = ["Our Story", "Blog", "Shipping & returns", "Terms & conditions", "Privacy Policy"]

	const menuService = ["Flower Subcription", "Wedding & Event Decor"]

	const menuContact = [
		{
			title: "Address",
			detail: "15/4 21 Street,Go Vap District,Viet Nam"
		},
		{
			title: "Phone",
			detail: "+85 344-248-396"
		},
		{
			title: "Email",
			detail: "tienphatng.693@gmail.com"
		}
	]

	const menuSocialMedia = [
		{ item: TbBrandFacebook },
		{ item: TbBrandInstagram },
		{ item: TbBrandLinkedin },
		{ item: TbBrandPinterest },
		{ item: TbBrandLeetcode }
	]

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
			<div className="w-full md:border-r border-black pb-10 xl:border-b-[0px] border-b">
				<div className="py-10 px-4 md:p-10 flex flex-col gap-6">
					<p className='text-sm'>
						Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas...
						Reminds you 7 days before.
						No spam or sharing your address
					</p>
					<input type="text" className='px-5 py-3 border border-gray-300 w-full' placeholder='+84 XXX-XXX-XXX' />
					<button className='w-full uppercase px-5 py-3 bg-black text-white transition-all border-x border-black hover:bg-transparent hover:text-black'>book a call</button>
				</div>
			</div>
			<div className="w-full xl:border-r border-black xl:border-b-[0px] border-b">
				<div className="py-10 px-4 md:p-10">
					<h1 className='text-lg text-gray-500 mb-5'>Contact Us</h1>
					<div className="flex flex-col justify-start gap-4">
						{menuContact.map((item, index) => (
							<div className="" key={index}>
								<span className='text-sm text-gray-600 block mb-2'>{item.title}</span>
								<p className='text-sm'>{item.detail}</p>
							</div>
						))}
					</div>
					<h1 className='text-lg text-gray-500 my-6'>Follow Us</h1>
					<div className="flex flex-row justify-start gap-4">
						{menuSocialMedia.map((item, index) => (
							<Link key={index}>
								<item.item size={25} />
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="w-full md:border-r border-black md:border-b-[0px] border-b">
				<div className="py-10 px-4 md:p-10">
					<h1 className='text-lg text-gray-500 mb-5'>Shop</h1>
					<ul className='flex flex-col gap-2'>
						{menuShop.map((item,index) => (
							<li className='text-sm' key={index}>
								<Link>
									{item}
								</Link>
							</li>
						))}
					</ul>
					<h1 className='text-lg text-gray-500 my-5'>Service</h1>
					<ul className='flex flex-col gap-2'>
						{menuService.map((item,index) => (
							<li className='text-sm' key={index}>
								<Link>
									{item}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="w-full">
				<div className="py-10 px-4 md:p-10">
					<h1 className='text-lg text-gray-500 mb-5'>About us</h1>
					<ul className='flex flex-col gap-2'>
						{menuAboutUs.map((item, index) => (
							<li className={`text-sm` + ((index === 2) ? ' mt-3' : '')} key={index}>
								<Link>
									{item}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer