/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				wedddingPlace: "url('./assets/img/weddingPlace.jpg')"
			},
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				'2xl': '1440px',
			},
			keyframes: {
				wiggle: {
					'0%': { width: '100%' },
					'100%': { width: '0' },
				}
			},
			animation: {
				'hover-out': 'wiggle 0.7s linear infinite',
			},
			

		},
	},
	plugins: [require("autoprefixer")],
}