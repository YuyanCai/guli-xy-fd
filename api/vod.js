import request from '@/utils/request'
export default {
  getPlayAuth(vid) {
    return request({
      url: `/eduVod/video/getPlayAuth/${vid}`,
      method: 'get'
    })
  }

}