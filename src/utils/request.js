import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // url = base url + request url
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config
  },
  (error) => {
    // do something with request error
    console.log('request err=', error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data
    console.log('res.code=', res.code)

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      console.log('res.message=', res.message)

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        // store.dispatch('user/resetToken').then(() => {
        // location.reload()
        // })
        // })
      } else if (res.code === 60204 || res.code === 60205) {
        return response
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response
    }
  },
  (error) => {
    console.log('response err=', error) // for debug
    return Promise.reject(error)
  }
)

export default service
