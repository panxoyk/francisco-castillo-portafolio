/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			colors: {
				"light": "#faf8fd",
				// "dark": "",
				"primary": "#2b333f",
				// "secondary": "",
				"accent": "#136df5",
				// "muted": "",
				"success": "#22d85e",
				"danger": "#df3c48",
				"black": "#050506",
				"white": "#f5f1f3",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			screens: {
				"se": "370px",
			},
		},
	},
	plugins: [],
}
