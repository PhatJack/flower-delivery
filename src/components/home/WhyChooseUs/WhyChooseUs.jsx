import React from 'react'
import WhyChooseUsItem from './WhyChooseUsItem'

const WhyChooseUs = () => {

	const items = [
		{
			title: "Stylish bouquets by florists",
			description: "At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service."
		},
		{
			title: "On-time delivery",
			description: "Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably."
		},
		{
			title: "Safe payment",
			description: "You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence."
		},
		{
			title: "Subscription by your needs",
			description: "With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs."
		},

	]

	return (
		<section className='wrapper'>
			<div className="w-full xl:w-1/2 xl:border-r border-black xl:border-b-[0px] border-b">
				<div className="md:p-20 px-4 py-20">
					<h1 className='md:text-6xl text-4xl tracking-wide font-semibold !leading-[1.2]'>Why choose us</h1>
				</div>
			</div>
			<div className="w-full xl:w-1/2 border-r border-black">
				{items.map((item, index) => (
					<div className={ (index != items.length - 1) ? 'border-b border-black' : '' }>
						<WhyChooseUsItem title={item.title} description={item.description} />
					</div>
				))}
			</div>
		</section>
	)
}

export default WhyChooseUs