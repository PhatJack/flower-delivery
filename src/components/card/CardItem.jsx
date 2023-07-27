import React from 'react'
import { FreshFlower, DriedFlower, Candel, LivePlant } from '../../assets'


const CardItem = ({src}) => {
  return (
	<div className='w-full h-full'>
		<img src={src} alt="" className='w-full h-full object-contain border-none' />
	</div>
  )
}

export default CardItem