import { Axios } from 'axios'
import { AppUrl, AppUrls } from './Urls';


class HttpClient {

    axios!: Axios;

    constructor() {
        const config = {
            baseURL: AppUrl.domain.value,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        this.axios = new Axios(config);
    }
    doSomsing() {
        this.axios.get('/login_required')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    getRequest(url: AppUrls, dataCallback: (data: object) => void) {
        this.axios.get(url.value)
            .then(function (response) {
                // handle success
                // console.log(response);
                dataCallback(response)
            })
            .catch(function (error) {
                // handle error
                // console.log(error);
                dataCallback(error)
            })
    }
    postRequest(
        url: AppUrls,
        data: object,
        dataCallback: (data: object) => void
    ) {
        this.axios.post(
            url.value,
            JSON.stringify(data)
        ).then((response) => {
            dataCallback(response.data)
        }).catch((error) => {
            dataCallback(error)
        });
    }
}

export default HttpClient
