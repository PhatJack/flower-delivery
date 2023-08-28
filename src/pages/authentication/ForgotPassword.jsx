import React from 'react'

const ForgotPassword = () => {
	return (
		<div
			className={`w-full h-full md:h-fit md:w-1/2 fixed bg-white border z-20 border-black 
				left-1/2 -translate-x-1/2 transition-all duration-700 
				${register ? 'top-[61px] opacity-100' : '-top-full opacity-0'}`}>
			<div className="flex justify-center items-center m-auto">
				<div className="py-12 px-4 md:px-10 xl:px-20 xl:pt-20">
					<h1 className='lg:text-5xl text-3xl font-semibold lg:pr-40 !leading-[1.2]'>Reset your password</h1>
					<p className='mt-4 mb-2'>Please provide your phone number below to receive a code for restoring access to your account</p>
					<span className='block my-2'>Enter your phone number</span>
					<input type="tel" name="" id="" className='py-3 px-5 border w-full my-2 focus:outline-none text-base' placeholder='+84 XXX-XXX-XXX' />

					<button className='w-full uppercase px-5 py-3 bg-black text-white transition-all border border-black hover:bg-transparent hover:text-black'>continue</button>
					<div className="flex justify-center items-center md:items-end py-8 lg:py-12 flex-col md:flex-row md:gap-0 gap-3">
						<p className='px-3 underline cursor-pointer'>Privacy Policy</p>
						<p className='px-3 md:border-l border-black underline cursor-pointer'>Terms & conditions</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassword