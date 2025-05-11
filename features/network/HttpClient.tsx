import { Axios, AxiosResponse } from 'axios'
import { AppUrl, AppUrls } from './Urls';

var _axiosInstance: Axios | null = null; // private static

class HttpClient {
    axios!: Axios;
    // hot updated instance of config for all requests
    static config = {
        baseURL: AppUrl.domain.value,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer none'
        }
    }
    constructor() {
        if (_axiosInstance == null) {
            _axiosInstance = new Axios(HttpClient.config);
        }
        this.axios = _axiosInstance;
    }
    getRequest(url: AppUrls, dataCallback: (data: AxiosResponse) => void, params?: URLSearchParams,) {
        this.axios.get(url.value, { params: params })
            .then(function (response) {
                // handle success
                dataCallback(response)
            })
            .catch(function (error) {
                // handle error
                dataCallback(error)
            })
    }
    postRequest(
        url: AppUrls,
        data: object,
        dataCallback: (data: AxiosResponse) => void
    ) {
        this.axios.post(
            url.value,
            JSON.stringify(data)
        ).then((response) => {
            dataCallback(response)
        }).catch((error) => {
            dataCallback(error)
        });
    }
    static updateToken(newToken: string) {
        HttpClient.config.headers.Authorization = 'Bearer ' + newToken;
    }
}

export default HttpClient
