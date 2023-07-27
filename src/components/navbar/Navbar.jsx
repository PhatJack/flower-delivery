import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineShopping } from 'react-icons/ai'
const Navbar = () => {

	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<header>
			<nav className="flex justify-between items-center text-sm border-b border-l border-black">
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
							<Link>
								<AiOutlineMenu size={25} />
							</Link>
						</li>
						<li className='p-[18px] border-l border-black'>
							<Link>
								<AiOutlineShopping size={25} />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navbar