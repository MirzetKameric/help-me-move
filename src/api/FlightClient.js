import axios from 'axios'

class FlightClient {
    constructor() {
        axios.defaults.baseURL = process.env.VUE_APP_FLIGHT_API_URL
    }

    /**
     *
     * @param url
     * @param options
     * @returns {Promise<AxiosResponse<any>>}
     */
    get (url, options = {}) {
        return axios.get(url, options)
    }
}

export default new FlightClient()

