import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { TbBrandFacebook, TbBrandPinterest, TbBrandLinkedin, TbBrandInstagram, TbBrandLeetcode } from 'react-icons/tb'


const MobileMenu = () => {
	const menu = ["Sign in", "Shop", "Service", "Contact", "About"]

	const menuSocialMedia = [
		{ item: TbBrandFacebook },
		{ item: TbBrandInstagram },
		{ item: TbBrandLinkedin },
		{ item: TbBrandPinterest },
		{ item: TbBrandLeetcode }
	]

	return (
		<div className='w-full md:w-1/2 fixed h-screen top-[62px] bottom-0 bg-white border-x border-black md:hidden'>
			<div className="">
				<ul className='flex flex-col border-black'>
					{menu.map((item, index) => (
						<li className='text-base p-6 border-black border-b'>
							<Link>
								{item}
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