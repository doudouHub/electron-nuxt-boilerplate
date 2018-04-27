const { dependencies } = require('./src/package.json')

module.exports = {
  mode: 'spa',
  router: {
    mode: 'hash'
  },

  css: [
    '@/assets/css/global.scss'
  ],

  modules: [
    ['nuxtjs-electron', {
      main: 'main.js',
      build: {
        extend(config, options, nuxt) {
          config.externals = [
            ...Object.keys(dependencies || {})
          ]
        }
      }
    }],
  ],

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        // Run ESLint on save
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  dev: process.env.NUXT_ENV === 'development',
  debug: process.env.NUXT_DEBUG === 'true',
  srcDir: './src/'
}
