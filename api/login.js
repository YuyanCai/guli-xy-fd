import request from '@/utils/request'

export default {
  //根据手机号码发送短信
  submitLogin(userInfo) {
    return request({
      url: `/eduCenter/member/login`,
      method: 'post',
      data: userInfo
    })
  },
  //根据token获取用户信息
  getLoginInfo() {
    return request({
      url: `/eduCenter/member/getMemberInfo`,
      method: 'get',
     // headers: {'token': cookie.get('guli_token')}
    })
    //headers: {'token': cookie.get('guli_token')} 
  }
}