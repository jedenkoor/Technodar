const isDev = process.env.NODE_ENV !== 'production'
const prodUrl = 'https://technodar.com'

export default {
  loading: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      { hid: 'charset', charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },

      { hid: 'og:title', property: 'og:title', content: 'Teсhnodar' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Teсhnodar' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: '/share.jpg' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1240' },
      { hid: 'og:image:height', property: 'og:image:height', content: '640' },

      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#ffffff' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '~/assets/styles/variables/mixins.scss',
    '~/assets/styles/global.scss',
    'swiper/dist/css/swiper.css'
  ],

  styleResources: {
    scss: ['@/assets/styles/variables/mixins.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/scrollto.js',
    '~/plugins/router',
    { src: '~/plugins/v-click-outside.js', mode: 'client' },
    { src: '~/plugins/v-scroll-lock.js', mode: 'client' },
    { src: '~/plugins/vuelidate', ssr: false },
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/vue-cool-lightbox', mode: 'client' },
    { src: '~/plugins/ymapPlugin.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/svg/', prefix: 'svg' },
    { path: '~/components/common/', prefix: 'common' },
    { path: '~/components/popup/', prefix: 'popup' },
    { path: '~/components/header/', prefix: 'header' },
    { path: '~/components/form/', prefix: 'form' },
    { path: '~/components/sections/general/', prefix: 'general' },
    { path: '~/components/sections/index/', prefix: 'index' },
    { path: '~/components/sections/industries/', prefix: 'industries' },
    { path: '~/components/sections/production/', prefix: 'production' },
    { path: '~/components/sections/development/', prefix: 'development' },
    { path: '~/components/sections/careers/', prefix: 'careers' }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@aceforth/nuxt-optimized-images'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-healthcheck',
    '@nuxtjs/robots',
    'vue-scrollto/nuxt',
    ['nuxt-lazy-load', {
      images: true,
      videos: false,
      audios: false,
      iframes: false,
      native: false,
      polyfill: true,
      directiveOnly: true,

      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',

      defaultImage: '/placeholder.png',

      observerConfig: {
        rootMargin: '800px 0px 800px 0px'
      }
    }],
    ['@nuxtjs/i18n',
      {
        vueI18nLoader: true,
        skipSettingLocaleOnNavigate: true,
        baseUrl: prodUrl,
        locales: [
          {
            code: 'ru',
            name: 'RU',
            iso: 'ru'
          },
          {
            code: 'en',
            name: 'ENG',
            iso: 'en'
          }
        ],
        strategy: 'prefix',
        defaultLocale: 'ru',
        vueI18n: {
          messages: {
            ru: require('./locales/ru.json'),
            en: require('./locales/en.json')
          }
        }
      }
    ],
    '@nuxtjs/sitemap'
  ],

  optimizedImages: {
    optimizeImages: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Teсhnodar',
      lang: 'ru'
    }
  },

  healthcheck: {
    path: '/healthz',
    contentType: 'text/plain'
  },

  robots: {
    UserAgent: '*',
    Disallow: '/',
    Sitemap: `${prodUrl}/sitemap.xml`
  },

  sitemap: {
    hostname: prodUrl,
    defaults: {
      lastmod: new Date()
    },
    trailingSlash: true,
    i18n: {
      locales: ['ru', 'en'],
      routesNameSeparator: '___'
    }
  },

  render: {
    static: {
      maxAge: '1y'
    },
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
        .filter(f => f.asType === 'script' && f.file === 'runtime.js')
        .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    }
  },

  bundleRenderer: {
    shouldPreload: (file, type) => {
      return ['script', 'style', 'font'].includes(type)
    }
  },

  cache: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: !isDev,
    standalone: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },

  extend (config, ctx) {
    // eslint-disable-next-line no-param-reassign
    config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
  }
}
