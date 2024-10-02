export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Naito One',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', 'content': 'ie=edge' },
      {
        hid: 'description',
        name: 'description',
        content: 'Swiss company creating innovative IT solutions',
      },
      { hid: 'theme-color', name: 'theme-color', content: '#212121' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#333' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/tailwind.scss',
    '~/assets/scss/icons.scss',
    '~/assets/scss/components.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/reset.scss',
    '~/assets/scss/styles.scss',
    '~/assets/scss/marked.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-i18n'],

  /*
   ** Nuxt.js modules
   */
  buildModules: ['nuxt-purgecss'],

  purgeCSS: {
    mode: 'webpack',
    whitelist: [
      'nuxt-link-exact-active',
      'page-enter-active',
      'page-leave-active',
      'page-leave-to',
      'page-enter',
    ],
    whitelistPatternsChildren: [/marked$/],
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: './tailwind.config.js',
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
