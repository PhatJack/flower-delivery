import { Fragment,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import {publicRoutes} from './routes/routes'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

	const renderPublicRoutes = () => {
		return publicRoutes.map((route, index) => {
			const Page = route.component
			const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout
			return (
				<Route
					key={route.path}
					path={route.path}
					element={
						<Layout>
							<Page />
						</Layout>
					}
				/>
			)
		})
	}

	return (
		<BrowserRouter>
			<Routes>
				{renderPublicRoutes()}
			</Routes>
		</BrowserRouter>
	)
}

export default App
