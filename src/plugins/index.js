/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import installGlobalComponents from './global-components'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { PromiseDialog } from 'vue3-promise-dialog'
import browserDetect from 'vue-detect-browser'
import JsonExcel from 'vue-json-excel3'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export function registerPlugins(app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(PromiseDialog)
    .use(browserDetect)
    .use(installGlobalComponents)
    .component('DownloadExcel', JsonExcel)
}
