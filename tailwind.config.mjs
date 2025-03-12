import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			  fontFamily: {
        sans: ['Barlow-Regular', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [
		typography,
		aspectRatio,
	],
}
