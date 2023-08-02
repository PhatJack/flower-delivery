import { Fragment, useState, useEffect, CSSProperties } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { publicRoutes } from './routes/routes'
import DefaultLayout from './layouts/DefaultLayout'
import HashLoader from "react-spinners/HashLoader";
import { useThemeContext } from './hook/useThemeContext';



function App() {
	const [loading, setLoading] = useState(false)
	const [state,dispatch] = useThemeContext();
	useEffect(() => {
		setLoading(true)
		dispatch({type: "IS_LOADING",value:true})
		setTimeout(() => {
			setLoading(false)
		}, 4000);
	}, [])
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
			{
				loading ?
					<HashLoader
						color="#272829"
						size={120}
						cssOverride={{
							display: 'block',
							margin: '0 auto',
							height: '100vh'
						}}
					/>
					:
					<Routes>
						{renderPublicRoutes()}
					</Routes>
			}
		</BrowserRouter>
	)
}

export default App
