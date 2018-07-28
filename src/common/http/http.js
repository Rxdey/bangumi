import axios from 'axios'
import qs from 'qs'
import store from '../../redux/store'
import { loadingState } from '../../redux/action'
// 请求拦截
axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 响应拦截
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.resolve(error.response)
    }
)

function errorState(response) {
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
    } else {
        console.error('网络错误')
    }
}

function successState(res) {}
const config = {
    method: 'get', //请求方式
    url: '', //地址
    timeout: 10000, //超时
    responseType: 'json', //返回格式
    headers: {}
    // qs.stringify(data)
}
const httpServer = (opt, data, isQs = true) => {
    store.dispatch(loadingState(true));
    opt = Object.assign({}, config, opt);
    let {
        method,
        url,
        timeout,
        responseType,
        headers
    } = opt
    opt['headers'] = {};
    if (opt.method.toLowerCase() == 'get') {
        opt['params'] = Object.assign(data);
    } else {
        opt['data'] = isQs ? qs.stringify(data) : data;
    }
    return new Promise(function (resolve, reject) {
        axios(opt)
            .then(res => {
                successState(res)
                resolve(res)
                store.dispatch(loadingState(false))
            })
            .catch(response => {
                errorState(response)
                reject(response);
            })
    })
}

export default httpServer