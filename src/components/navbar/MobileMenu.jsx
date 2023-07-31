import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { TbBrandFacebook, TbBrandPinterest, TbBrandLinkedin, TbBrandInstagram, TbBrandLeetcode } from 'react-icons/tb'


const MobileMenu = ({ handleNav, nav, handleSignIn }) => {


	const menu = [
		{
			title: "Sign In",
			onClick: () => handleSignIn()
		},
		{
			title: "Shop",
			link: "/flower-delivery/shop"
		},
		{
			title: "Service"
		},
		{
			title: "Contact"
		},
		{
			title: "About"
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
		<div className={`w-full md:w-1/2 fixed h-screen top-[62px] bottom-0 bg-white border border-black md:hidden transition-all duration-500 ${nav ? 'left-0 opacity-100' : '-left-full opacity-0'}`}>
			<div className="">
				<ul className='flex flex-col border-black'>
					{menu.map((item, index) => (
						<li className='text-base border-black border-b' key={index}>
							<Link onClick={item.onClick} className='p-6 block' to={item.link}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
				<div className="flex p-6 gap-7 border-black border-b">
					{menuSocialMedia.map((item, index) => (
						<Link key={index}>
							<item.item size={25} />
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default MobileMenu