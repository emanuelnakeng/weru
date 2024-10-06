/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false,
	content: [],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			margin: 0,
			padding: 0,
			colors: {
				'bg-clr': '#29192e',
				'bg-light-clr': '#f7f7f7',
				'boarding-clr': '#E0B6EE',
				'accent-clr': '#d78df0',
			},
		},
	},
	plugins: [],
};
