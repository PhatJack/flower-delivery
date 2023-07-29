import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PropTypes from 'prop-types'

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default DefaultLayout