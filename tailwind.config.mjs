/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"primary": "#13351f",
			"accent": "#059547",
			"success": "#22d85e",
			"danger": "#df3c48",
			"light": "#f2ebe2",
			"black": "#050506",
			"white": "#f5f1f3",
		},
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {},
	},
	plugins: [],
}
