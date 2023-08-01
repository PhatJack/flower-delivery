import React, { useState } from 'react'
import { Classic, FlowerAndLetter, Luke, Seasonal } from '../../assets/img/subscription'
import WhyChooseUsItem from '../../components/home/WhyChooseUs/WhyChooseUsItem'

const Subscription = () => {

	const [quantity, setQuantity] = useState(1);

	const heroContent = [
		{
			title: "For Yourself",
			description: "The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!"
		},
		{
			title: "As A Gift",
			description: "Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing."
		},
		{
			title: "For Business",
			description: "Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part."
		}
	]

	const items = [
		{
			title: "Choose a plan",
			description: "Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance."
		},
		{
			title: "Frequency and Duration",
			description: "Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences."
		},
		{
			title: "Pay once",
			description: "After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones"
		}
	]

	const planItems = [
		{
			img: Classic,
			name: "Classic",
			idealOptions: ["Price $45", "Free Delivery", "Best for a budget", "Glass vase with first delivery", "Save up to 25%"]
		},
		{
			img: Seasonal,
			name: "Seasonal",
			idealOptions: ["Price $65", "Free Delivery", "Best for a budget", "Luxury candel with first delivery", "Save up to 30%"]
		},
		{
			img: Luke,
			name: "Luke",
			idealOptions: ["Price $85", "Free Delivery", "Best for a budget", "Glass vase with first delivery", "Save up to 35%"]
		}
	]

	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleChange = (e) => {
		var value = e.target.value.replace(/[^0-9]/, '');
		value = value === '' ? 1 : value;
		value = parseInt(value);
		setQuantity(value);
	};

	return (
		<div className="">
			<div className='wrapper'>
				<div className="w-full xl:w-1/2">
					<div className="w-full h-[800px] aspect-square">
						<img src={FlowerAndLetter} alt="" className='w-full h-full object-cover aspect-square ' />
					</div>
				</div>
				<div className="w-full xl:w-1/2 border-r border-black">
					<div className="md:p-20 px-4 py-20">
						<h1 className='text-4xl xl:text-5xl font-semibold'>Flower Subscription</h1>
						{
							heroContent.map((item, index) => (
								<div className="flex flex-col" key={index}>
									<div className="">
										<h2 className='text-lg mt-5 mb-2'>{item.title}</h2>
										<ul className='pl-10 pr-16'>
											<li className='list-disc'>
												{item.description}
											</li>
										</ul>
									</div>
								</div>
							))
						}
						<button className='w-full lg:w-[30%]  uppercase px-5 py-3 text-black transition-all border border-black hover:bg-black hover:text-white mt-28'>explore plan</button>
					</div>
				</div>
			</div>
			<div className="wrapper">
				<div className="w-full xl:w-1/2 border-r border-black xl:border-b-[0px] border-b">
					<div className="md:p-20 px-4 py-20">
						<p className='md:text-6xl text-4xl tracking-wide font-semibold !leading-[1.2]'>How does it work?</p>
					</div>
				</div>
				<div className="w-full xl:w-1/2 border-r border-black">
					{items.map((item, index) => (
						<div className={(index != items.length - 1) ? 'border-b border-black' : ''} key={index}>
							<WhyChooseUsItem title={item.title} description={item.description} />
						</div>
					))}
				</div>
			</div>
			<div className="wrapper">
				<div className="w-full xl:w-1/2 border-r border-black">
					<div className="md:p-20 px-4 py-20">
						<div className="border-b pb-10">
							<div className="top-content">
								<span className="block uppercase">Build Your Subscription</span>
								<span className="block text-3xl tracking-wide my-5">Selecting a Plan</span>
								<div className="description text-base mb-4">
									<p>Enjoy free shipping on every order and save up to 30%. </p>
									<p>Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning.
										To modify, pause, or cancel your subscription, simply log in to your account dashboard.
										You're in complete control of your flower delivery experience.</p>
								</div>
							</div>
							<div className="flex flex-col gap-3">
								{planItems.map((item, index) => (
									<div className="flex flex-col">
										<div className="flex border-x border-t flex-col md:flex-row">
											<div className="md:w-1/2 xl:w-[350px] h-[300px]">
												<img src={item.img} alt="" className='w-full h-full object-cover' />
											</div>
											<div className="md:p-0 pb-4">
												<span className="block px-5 pt-4 pb-2 text-xl">{item.name}</span>
												<ul className='flex flex-col gap-3 pl-14'>
													{item.idealOptions.map((itemOptions, index) => (
														<li className='list-disc'>
															{itemOptions}
														</li>
													))}
												</ul>
											</div>
										</div>
										<button className='w-full uppercase px-5 py-3 transition-all border bg-black text-white hover:bg-transparent hover:text-black'>Select</button>
									</div>
								))}
							</div>
						</div>
						<div className="py-10 border-b">
							<p className='text-2xl '>How often do you want flowers delivered ?</p>
							<span className='block text-gray-500 my-4'>Select the delivery frequency</span>
							<div className="flex justify-between items-center gap-4">
								<button className='uppercase border border-black p-3 text-base w-full transition-all bg-transparent hover:bg-black hover:text-white'>
									Monthly
								</button>
								<button className='uppercase border border-black p-3 text-base w-full transition-all bg-transparent hover:bg-black hover:text-white'>
									bi-weekly
								</button>
								<button className='uppercase border border-black p-3 text-base w-full transition-all bg-transparent hover:bg-black hover:text-white'>
									weekly
								</button>
							</div>
						</div>
						<div className="py-10 border-b">
							<p className='text-2xl '>How many deliveries would you like ?</p>
							<span className='block text-gray-500 my-4'>Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need </span>
							<div className="flex justify-start items-center">
								<span onClick={handleDecrement} className='cursor-pointer w-10 text-center h-10 border border-black text-3xl font-thin'>-</span>
								<input type="text" value={quantity} onChange={handleChange} className='w-16 h-10 text-center text-2xl font-thin border-y border-black' />
								<span onClick={handleIncrement} className='cursor-pointer w-10 text-center h-10 border border-black text-3xl font-thin'>+</span>
							</div>
						</div>
						<div className="py-10">
						<button className='w-full  uppercase px-5 py-3 text-white transition-all border border-black bg-black hover:bg-transparent hover:text-black'>check out</button>
						</div>
					</div>
				</div>
				<div className="hidden md:block w-full xl:w-1/2 border-r border-black">
					<div className="w-full h-[800px] aspect-square">
						<img src={FlowerAndLetter} alt="" className='w-full h-full object-cover aspect-square bg-gradient-to-br from-gray-400 to-black/50' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Subscription