import {
	defineConfig
} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import UnoCSS from 'unocss/astro'

import '@unocss/reset/tailwind.css'

export default defineConfig({
	site: 'https://example.com',

	integrations: [mdx(), sitemap(),
		vue({}),
		UnoCSS({}),

	],
});