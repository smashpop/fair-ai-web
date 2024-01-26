import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_STORAGE_URL, // url = base url + request url
  timeout: 30000
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'multipart/form-data'
    return config
  },
  (error) => {
    console.log('requestStorage err=', error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log('requestStorage err=', error) // for debug
    return Promise.reject(error)
  }
)

export default service
