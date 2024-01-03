/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import App from '../App.vue'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    //render: (h) => h(App)
}
