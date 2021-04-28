export default {
  ssr: false,

  server: {
    host: '0.0.0.0',
  },

  head: {
    title: 'Vough Leads',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap',
      },
    ],
  },

  css: ['~/assets/scss/main.scss'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        suffix: true,
      },
    ],
  ],

  fontawesome: {
    icons: {
      solid: [
        'faCalendar',
        'faUser',
        'faEnvelope',
        'faPhoneSquareAlt',
        'faBuilding',
        'faSearch'
      ],
    },
  },

  styleResources: {
    scss: './assets/scss/*.scss',
  },

  modules: ['@nuxtjs/axios'],

  build: {},

  modulesDir: ['node_modules/font-awesome'],
}
