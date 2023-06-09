import axios from 'axios'

// 获取Token
const AUTH_TOKEN: () => string | boolean = () => window.localStorage.getItem('_AUTH_TOKEN') || false

const instance = axios.create()
// 设置基本请求源
instance.defaults.baseURL = import.meta.env.VITE_BASE_URL
instance.defaults.timeout = 8000
instance.defaults.withCredentials = false
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 状态码大于400的都将视作失败
instance.defaults.validateStatus = (status: number) => status >= 200 && status <= 400
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    config.headers!.Authorization = AUTH_TOKEN()
    return config
  },
  () =>
    // 对请求错误做些什么
    Promise.reject(new Error('请求未发送'))
)
instance.interceptors.response.use(
  (response) => {
    // const { data, status, statusText, headers, config, request } = response
    return response
  },
  (error: any) => {
    if (!window.navigator.onLine) {
      // 断网处理比如跳转到断网页面
      window.alert('网络异常，请检查网络')
      return Promise.reject(error)
    }
    if (!error.response) {
      window.alert('系统繁忙，请稍后再试')
      return Promise.reject(error)
    }
    // 统一处理400以上的状态码
    if (error.response.status === 401) {
      window.alert('用户未认证')
    } else if (error.response.status === 403) {
      window.alert('token过期了')
    } else if (error.response.status === 404) {
      window.alert('访问内容不存在')
    } else if (error.response.status === 500) {
      window.alert('系统繁忙，请稍后再试')
    }
    return Promise.reject(error)
  }
)

const httpRequest = (url: string, type = 'GET', data = {}) => {
  return new Promise((resolve, reject) => {
    const option = {
      url,
      method: type
    } as { url: string; params?: any; data?: any }
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    instance(option)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          resolve(res.data)
        } else {
          // 此处可统一处理非200-400之间的状态码
          window.alert(res.data.msg)
          reject(res.data)
        }
      })
      .catch((err: Error) => {
        reject(err)
      })
  })
}

export default httpRequest
