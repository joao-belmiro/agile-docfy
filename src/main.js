import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import pt from './languages/pt'
import en from './languages/en'
const messages = {
  pt: pt,
  en: en
}

const i18n = createI18n({
  locale: 'pt',
  messages
})
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
