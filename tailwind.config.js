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
				// 'bwi-eerie-black-23%': 'rgba(24, 24, 23, 0.23)',
				'bwi-eerie-black-23%': '#BAB9B1',
				'white-70%': 'rgba(255, 255, 255, 0.7)',
				'bwi-battleship': '#8E8B7B',
				'bwi-bone': '#D7CEBD',
				'bwi-lion': '#A0825B',
				'bwi-error': '#D32F2F',
				'black-60%': 'rgba(0, 0, 0, 0.7)',
			},
			fontFamily: {
				oakes: ['Oakes Grotesk', ...defaultTheme.fontFamily.sans],
				optima: ['Optima', ...defaultTheme.fontFamily.sans]
			},
			transitionProperty: {
				'max-height': 'max-height'
			}
		},
		container: {
			center: true,
			padding: '2rem'
		}
	},
	safelist: ['translate-x-[0%]', 'translate-x-[100%]', 'translate-x-[200%]'],
	plugins: []
};
