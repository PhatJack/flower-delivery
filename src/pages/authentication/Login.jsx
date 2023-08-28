import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import Navbar from '../../components/navbar/Navbar'


const Login = ({ signIn }) => {
	return (
		<div className={`w-full h-full md:h-fit md:w-1/2 fixed bg-white border z-20 border-black left-1/2 -translate-x-1/2 transition-all duration-700 ${signIn ? 'top-[61px] opacity-100' : '-top-full opacity-0'}`}>
			<div className="flex justify-center items-center m-auto">
				<div className="py-12 px-4 md:px-10 xl:px-20 xl:pt-20">
					<h1 className='lg:text-5xl text-3xl font-semibold lg:pr-40 !leading-[1.2]'>Greetings! Welcome to luxury gift shop.</h1>
					<p className='mt-4 mb-2'>Use your mobile number to sign up or log in</p>
					<div className="flex justify-start items-center gap-5 flex-col mb-5 mt-1">
						<input type="text" className='px-5 py-3 border border-gray-300 w-full' placeholder='+84 XXX-XXX-XXX' />
						<button className='w-full uppercase px-5 py-3 bg-black text-white transition-all border border-black hover:bg-transparent hover:text-black'>continue</button>
					</div>
					<div
						className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
						<p
							className="mx-4 mb-0 text-center font-semibold text-gray-500">
							Or
						</p>
					</div>
					<p className='text-sm'>Instantly login or sign up via Google</p>
					<div className="flex flex-col justify-start items-center gap-2 2xl:flex-nowrap flex-wrap my-3 md:my-5">
						<div className="flex justify-start items-center gap-5 2xl:flex-nowrap flex-wrap w-full">
							<button className='w-full 2xl:w-1/2 flex justify-center items-center gap-3 uppercase px-5 py-3 border text-sm text-black transition-all border-black hover:bg-black hover:text-white'>
								<FcGoogle size={25} />
								continue with google
							</button>
							<button className='w-full 2xl:w-1/2 flex justify-center items-center gap-3 uppercase px-5 py-3 border text-sm text-black transition-all border-black hover:bg-black hover:text-white'>
								<BsFacebook size={25} color='blue' />
								continue with facebook
							</button>
						</div>
						<button className='w-full uppercase px-5 py-4 border text-sm text-black transition-all border-black hover:bg-black hover:text-white'>
							Sign Up With Email
						</button>
					</div>
					<div className="flex justify-center items-center md:items-end py-8 lg:py-12 flex-col md:flex-row md:gap-0 gap-3">
						<p className='px-3 underline cursor-pointer'>Privacy Policy</p>
						<p className='px-3 md:border-l border-black underline cursor-pointer'>Terms & conditions</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login