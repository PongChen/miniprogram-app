import request from '../utils/request'

function loginByAccount(account, password) {
  return request({
    url: '/users/login',
    method: 'post',
    data: {
      account: account,
      password: password
    }
  })
}
export {
  loginByAccount
}