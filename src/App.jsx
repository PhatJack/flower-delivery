import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
function App() {

	return (
		<BrowserRouter>
			<div className='border border-black'>
				<Home />
			</div>
		</BrowserRouter>
	)
}

export default App
