import * as utils from './utils'

export default {
  filters: {
    i18n: utils.i18n,
    url: utils.createURL,
    link: utils.createLink,
  },
  methods: {
    createLink: utils.createLink,
    createURL: utils.createURL,
    i18n: utils.i18n,
    getLanguage: utils.getLanguage,
    setLanguage: utils.setLanguage,
    jumpTo: utils.jumpTo
  },
  created () {
    // get and set language
    utils.getLanguage(language => {
      this.language = language
    })

    // listen to the language change event
    const channel = new BroadcastChannel('language')
    channel.onmessage = event => {
      if (event.data && event.data.language) {
        this.language = event.data.language
      }
    }
  }
}