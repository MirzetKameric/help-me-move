import CONFIG from '@root/config'
import client from '@/api/Client'

export default {
    install(app, options) {
        this.$vue = app
        this.$options = options

        this.$vue.prototype.$wApi = new client(CONFIG.API.WEATHER.URL)
        this.$vue.prototype.$fApi = new client(CONFIG.API.FLIGHT.URL)

        this.initFilters()
        this.initDirectives()
        this.initMixins()
        this.initPlugins()
    },

    initFilters() {},
    initDirectives() {},
    initMixins() {},
    initPlugins() {}
}