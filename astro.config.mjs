import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import UnoCSS from 'unocss/astro';
import preact from '@astrojs/preact';
import '@unocss/reset/tailwind.css';
import { i18n, defaultLocaleSitemapFilter } from "astro-i18n-aut";

const defaultLocale = "en";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-ES",
  fr: "fr-CA",
};

// https://astro.build/config
export default defineConfig({
  experimental: {
    redirects: true,
  },
  site: 'https://example.com',
  trailingSlash: "always",
  integrations: [mdx(), sitemap(), vue({}), UnoCSS({}), preact(),
  i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: defaultLocaleSitemapFilter({ defaultLocale }),
    }),],
  build: {
    format: "directory",
  },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
