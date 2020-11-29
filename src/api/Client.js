import axios from 'axios'
import { jsonToQueryString } from "@/utils/helpers";

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

        url += '?' + jsonToQueryString(queryParams);
        if (options.queryParams) {
            delete options.queryParams
        }

        axios.defaults.baseURL = process.env.VUE_APP_WEATHER_API_URL
        return axios.get(url, options)
    }
}

export default new Client()

