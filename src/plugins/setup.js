import client from '@/api/Client'
import flightClient from '@/api/FlightClient'
export default {
    install(app, options) {
        this.$vue = app
        this.$options = options

        app.prototype.$weatherApi = client
        app.prototype.$flightApi = flightClient

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