import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu, AiOutlineShopping } from 'react-icons/ai'
import MobileMenu from './MobileMenu';
const Navbar = () => {

	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<header className='sticky top-0 z-20 bg-white'>
			<nav className="flex justify-between items-center text-sm border-b border-black relative">
				<div className="left hidden md:block">
					<ul className='flex justify-between items-center'>
						<li className='border-black border-r px-12 py-5'>
							<Link>
								Shop
							</Link>
						</li>
						<li className='border-black border-r px-12 py-5'>
							<Link>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div className="right hidden md:block">
					<ul className='flex justify-between items-center'>
						<li className='border-black border-r border-l px-12 py-5'>
							<Link>
								Sign in
							</Link>
						</li>
						<li className='px-12 py-5'>
							<Link>
								Cart
							</Link>
						</li>
					</ul>
				</div>
				<div className="nav-menu block md:hidden w-full">
					<ul className='flex justify-between items-center'>
						<li className='p-[18px] border-r border-black'>
							{!nav ?
								<AiOutlineMenu size={25} onClick={handleNav} className="md:hidden cursor-pointer" />
								:
								<AiOutlineClose size={25} onClick={handleNav} className="md:hidden cursor-pointer rotate-0 transition-all hover:rotate-[360deg] duration-500" />
							}
						</li>
						<li className='p-[18px] border-l border-black'>
							<Link>
								<AiOutlineShopping size={25} />
							</Link>
						</li>
					</ul>
				</div>
				{
					nav &&
					<div className={`fixed z-[30] transition-all duration-1000 !visible overflow-hidden` + (nav ? ' right-[100%] opacity-100' : ' right-[-100%] opacity-0')}>
						<MobileMenu />
					</div>
				}
				{nav && <div className='w-full h-screen fixed z-[10] bg-gray-300/40 top-[63px] backdrop-blur-sm md:hidden' onClick={handleNav}></div>}
			</nav>
		</header>
	)
}

export default Navbar