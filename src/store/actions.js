import {login} from '../utils/require'
let actions = {
  getToken ({commit}, {ruleForm2, notify, router}) {
    login(ruleForm2).then(res => {
      if (res.success === 1) {
        commit('saveToken', res.token)
        commit('saveUser', res.username)
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', res.username)
        notify({
          title: '正确',
          message: '即将跳转首页',
          type: 'success'
        })
        setTimeout(() => {
          router.push({
            path: '/home'
          })
        }, 1000)
      } else {
        notify({
          title: '错误',
          message: '用户名密码输入错误',
          type: 'error'
        })
      }
    })
  }
}

export default actions
