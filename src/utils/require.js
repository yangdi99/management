import Vue from 'vue'
import axios from 'axios'

let instance = axios.create({
  // headers: {
  //   'plantform': 'PC'
  // },
  baseURL: 'http://localhost:9090'
})

// 请求拦截
instance.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use((response) => {
  let status = response.status
  if (status === 200) {
    return response.data
  } else {
    return Promise.reject(response.status)
  }
}, (err) => {
  return Promise.reject(err)
})

Object.defineProperty(Vue.prototype, '$axios', {
  value: instance
})

export default instance

export function login (ruleForm2) {
  return new Promise((resolve, reject) => {
    instance.post('/dsp-admin/user/login', {
      ruleForm2
    }).then(res => {
      resolve(res)
    })
  })
}
