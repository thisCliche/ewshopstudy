import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export function request(config: AxiosRequestConfig) {
  const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => { })

  // 相应拦截
  instance.interceptors.response.use(res => {
    return res.data ? res.data : res
  }, err => {
    // 如果有错误，这里会统一处理
  })

  return instance(config)
}