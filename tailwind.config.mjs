/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],

    theme: {
		extend: {
            cursor: {
            'handcursor': 'url(/cursor.svg) 25 25, pointer',
        	}
        },
	},
	
    theme: {
		extend: {
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
              },
              keyframes: {
                'infinite-scroll': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(-100%)' },
                },
              }
        },
	},
}
