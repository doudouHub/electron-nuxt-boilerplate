const { dependencies } = require('./src/package.json')
const { devDependencies } = require('./package.json')

const dev = process.env.NUXT_ENV === 'development'
const debug = process.env.NUXT_DEBUG === 'true'

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
      main: dev ? 'main.dev.js' : 'main.js',
      build: {
        extend (config, options, nuxt) {
          config.externals = [
            ...Object.keys(dependencies || {}),
            ...Object.keys(devDependencies || {})
          ]

          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
      }
    }]
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

  dev,
  debug,
  srcDir: './src/'
}
