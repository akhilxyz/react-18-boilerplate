import axios from 'axios'
import { message as antdMessage } from 'antd'
import { ApiUrlConfig, requestConfigEnum, responseCodeEnum } from '@/enums/http'
import { API } from '@/api/index'
import { userStore } from '@/store/user'

/**
 *  axios https://github.com/axios/axios
 */


export const http = axios.create({
  baseURL: import.meta.env.MODE === 'dev' ? ApiUrlConfig.LOCAL : import.meta.env.WALLET_APP_API_URL,
  timeout: requestConfigEnum.TIME_OUT as number,
})

http.interceptors.request.use(
  (config) => {
    const token = userStore.getState().token
    if (token && config.headers)
      config.headers[requestConfigEnum.TOKEN_NAME] = token
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

http.interceptors.response.use(
  (config) => {
    // token
    if (config.data.statusCode === responseCodeEnum.LOGIN_CODE) {
      antdMessage.error(config.data.message)
      setTimeout(() => {
        API.authApi.loginOut
      }, 500)
      return Promise.reject(config.data)
    }
    //
    else if (config.data.statusCode !== responseCodeEnum.SUCCESS_CODE) {
      antdMessage.error(config.data.message)
      return Promise.reject(config.data)
    }
    return Promise.resolve(config.data.responseObject)
  },
  (error) => {
    let message = error.message
    if (error?.response?.data?.statusCode === responseCodeEnum.LOGIN_CODE) {
      antdMessage.error(message)
      setTimeout(() => {
        API.authApi.loginOut()
      }, 500)
      return Promise.reject(error)
    }
    if (message === 'Network Error')
      message = 'network failure'

    else if (message.includes('timeout'))
      message = 'Interface request timeout'

    else if (message.includes('Request failed with status code'))
      message = 'Interface exception'

    antdMessage.error(message)
    return Promise.reject(error)
  },
)
