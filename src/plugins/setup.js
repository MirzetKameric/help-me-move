import client from '@/api/Client'

export default {
    install(app, options) {
        this.$vue = app
        this.$options = options

        app.prototype.$weatherApi = client
        // this.$vue.prototype.$fApi = new client(CONFIG.API.FLIGHT.URL)

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