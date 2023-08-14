import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'bwi-chamoisee': '#7E6E5C',
				'bwi-Alabaster': '#EAE9DF',
				'70%-white': 'rgba(255, 255, 255, 0.7)'
			},
			fontFamily: {
				oakes: ['Oakes Grotesk', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
