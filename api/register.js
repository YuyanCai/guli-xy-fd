import request from '@/utils/request'

export default {
  //根据手机号码发送短信
  getMobile(mobile) {
    return request({
      url: `/eduMsm/msm/send/${mobile}`,
      method: 'get'
    })
  },
  //用户注册
  submitRegister(formItem) {
    return request({
      url: `/eduCenter/member/register`,
      method: 'post',
      data: formItem
    })
  },
}