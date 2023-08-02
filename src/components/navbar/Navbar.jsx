import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu, AiOutlineShopping } from 'react-icons/ai'
import MobileMenu from './MobileMenu';
import Login from '../../pages/authentication/Login';
import HomeCart from '../cart/Cart';
import { Logo } from '../../assets';
const Navbar = () => {

	const [nav, setNav] = useState(false);
	const [signIn, setSignIn] = useState(false);
	const [clickCart, setClickCart] = useState(false);


	const handleNav = () => {
		setNav(!nav)
	}

	const handleSignIn = () => {
		setSignIn(!signIn);
	}

	const handleCart = () => {
		setClickCart(!clickCart)
	}
	// console.log(clickCartConsumer)
	return (
		<header className='sticky top-0 z-20 bg-white'>
			<nav className="flex justify-between items-center text-sm border-b border-x border-black relative">
				<div className="left hidden md:block">
					<ul className='flex justify-between items-center'>
						<li className='border-black border-r'>
							<Link className='px-12 lg:px-16 py-5 block' to={`/flower-delivery/shop`}>
								Shop
							</Link>
						</li>
						<li className='border-black border-r'>
							<Link className='px-12 lg:px-16 py-5 block' to={"/flower-delivery/about"}>
								About
							</Link>
						</li>
					</ul>
				</div>
				<div className="w-[60px] h-[60px] hidden md:block">
					<Link to={"/flower-delivery"}>
						<img src={Logo} alt="" className='w-full h-full' />
					</Link>
				</div>
				<div className="right hidden md:block">
					<ul className='flex justify-between items-center'>
						<li className='border-black border-r border-l'>
							<Link className='px-12 lg:px-16 py-5 block' onClick={handleSignIn}>
								Sign in
							</Link>
						</li>
						<li className=''>
							<Link className='px-12 lg:px-16 py-5 block' onClick={handleCart}>
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
						<li>
							<div className="w-[60px] h-[60px] md:hidden">
								<Link to={"/flower-delivery"}>
									<img src={Logo} alt="" className='w-full h-full' />
								</Link>
							</div>
						</li>
						<li className='p-[18px] border-l border-black'>
							<Link>
								<AiOutlineShopping size={25} onClick={handleCart} />
							</Link>
						</li>
					</ul>
				</div>

				<MobileMenu handleNav={handleNav} nav={nav} handleSignIn={handleSignIn} className={`${nav ? 'block' : 'hidden'}`} />
				<Login signIn={signIn} />
				<div className={`w-full h-screen fixed z-[10] bg-gray-300/40 top-0 ${signIn ? 'block' : 'hidden'}`} onClick={handleSignIn}></div>
				<HomeCart handleCart={handleCart} clickCart={clickCart} className={`${clickCart ? 'block' : 'hidden'}`} />
				<div className={`w-full h-screen fixed z-[10] bg-gray-300/60 top-0 transition-all delay-500 ${clickCart ? 'block' : 'hidden'}`} onClick={handleCart}></div>
			</nav>
		</header>
	)
}

export default Navbar