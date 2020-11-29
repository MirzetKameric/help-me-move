import axios from 'axios'

export default class Client {
    constructor(apiUrl) {
        axios.defaults.baseURL = apiUrl
    }

    /**
     *
     * @param url
     * @param options
     * @returns {Promise<AxiosResponse<any>>}
     */
    get (url, options) {
        return axios.get(url, options)
    }
}

