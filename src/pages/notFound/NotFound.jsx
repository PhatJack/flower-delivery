import React from 'react'
import { ImgNotFound } from '../../assets'
import { Link } from 'react-router-dom'
import {GiReturnArrow} from 'react-icons/gi'
const NotFound = () => {
	return (
		<div className="flex flex-col h-[900px] justify-center border-b border-black relative">
			<img src={ImgNotFound} alt="" className='w-full h-full object-contain' />
			<Link to={"/"} className='absolute top-3/4 left-1/2 -translate-x-1/2 text-2xl flex justify-center items-center gap-2 border-b-2 border-black'>
				<GiReturnArrow size={25} />
				Go Home
			</Link>
		</div>
	)
}

export default NotFound