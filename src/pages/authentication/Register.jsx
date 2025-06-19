import React from 'react'

const Register = ({ register, setSignIn }) => {
	return (
		<>
			{/* Overlay */}
			{register && (
				<div 
				onClick={() => setSignIn(false)}
				className="fixed inset-0 bg-black/40 z-10 transition-opacity duration-700"></div>
			)}
			<div 
				className={`w-full h-full md:h-fit md:w-1/2 fixed bg-white border-x border-b z-20 border-black 
							left-1/2 -translate-x-1/2 transition-all duration-700 
							${register ? 'top-[61px] opacity-100' : '-top-full opacity-0'}`}>
							
				<div className="flex justify-center items-center m-auto">
					<div className="py-12 px-4 md:px-10 xl:px-20 xl:pt-20">
						<h1 className='lg:text-5xl text-3xl font-semibold lg:pr-40 !leading-[1.2]'>Sign up</h1>
						<p className='mt-4 mb-2'>Become a member and enjoy personalized gift recommendations, fast checkout, and more.</p>
						<input type="tel" name="" id="" className='py-3 border-b border-black w-full my-2 focus:outline-none text-lg' />
						<span className='block my-2'>Enter code from sms</span>
						<div className="flex justify-start gap-2 flex-col mb-5 mt-1">
							<input type="text" className='px-5 py-3 border border-gray-300 w-full' placeholder='XX XX XX' />
							<p className='text-sm text-gray-400'>Please check your phone for a message containing a code to enter</p>
						</div>
						<button className='w-full uppercase px-5 py-3 bg-black text-white transition-all border border-black hover:bg-transparent hover:text-black'>join us</button>
						
						<div className="flex justify-center items-center md:items-end py-8 lg:py-12 flex-col md:flex-row md:gap-0 gap-3">
							<p className='px-3 underline cursor-pointer'>Privacy Policy</p>
							<p className='px-3 md:border-l border-black underline cursor-pointer'>Terms & conditions</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Register