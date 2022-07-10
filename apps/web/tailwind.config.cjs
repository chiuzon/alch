/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				secondary: {
					1: '#46c4ea',
					2: '#68ceee',
					3: '#01a0ca'
				}
			},
			fontFamily: {
				'titan-one': ['Titan One', 'cursive'],
				poppins: ['Poppins', ' sans-serif']
			}
		}
	},
	plugins: []
};
