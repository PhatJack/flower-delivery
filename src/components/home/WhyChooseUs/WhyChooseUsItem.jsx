import React from 'react'

const WhyChooseUsItem = ({ title, description }) => {
	return (
		<div className='md:p-20 px-4 py-20 flex gap-5 flex-col'>
			<h1 className='md:text-4xl text-2xl border-black border-b pb-5 w-fit'>{title}</h1>
			<p className='md:text-base text-sm'>{description}</p>
		</div>
	)
}

export default WhyChooseUsItem