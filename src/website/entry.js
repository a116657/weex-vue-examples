import Vue from 'vue'
import IndexPage from './IndexPage.vue'
import { i18n } from './utils'

// Vue.config.lang = 'en'

window.Vue = Vue

Vue.filter('i18n', i18n)
Vue.mixin({
  methods: {
    i18n
  },
  watch: {
    language () {
      Vue.config.lang = this.language
      this.$forceUpdate()
    }
  }
})

IndexPage.el = '#root'
new Vue(IndexPage)
