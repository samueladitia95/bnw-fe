import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'bwi-chamoisee': '#7E6E5C',
				'bwi-alabaster': '#EAE9DF',
				'bwi-eerie-black': '#181817',
				'bwi-eerie-black-23%': 'rgba(24, 24, 23, 0.23)',
				'white-70%': 'rgba(255, 255, 255, 0.7)',
				base01: '#8E8B7B'
			},
			fontFamily: {
				oakes: ['Oakes Grotesk', ...defaultTheme.fontFamily.sans],
				optima: ['Optima', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
