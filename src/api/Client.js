import axios from 'axios'

class Client {
    constructor() {
        axios.defaults.baseURL = process.env.VUE_APP_WEATHER_API_URL
    }

    /**
     *
     * @param uri
     * @param options
     */
    get (uri, options = {}) {
        let url = uri
        const queryParams = {
            apikey: process.env.VUE_APP_WEATHER_API_KEY,
            ...options.queryParams,
        }

        url += '?' + Object.entries(queryParams).map(e => e.join('=')).join('&');
        if (options.queryParams) {
            delete options.queryParams
        }

        return axios.get(url, options)
    }
}

export default new Client()

