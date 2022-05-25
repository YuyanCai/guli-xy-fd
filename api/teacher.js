import request from '@/utils/request'

export default {
  getTeacherList(page, limit) {   
    return request({
      url: `/eduService/teacherFront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  //讲师详情的方法
  getTeacherInfo(teacherId) {
    return request({
      url: `/eduService/teacherFront/getTeacherFrontInfo/${teacherId}`,
      method: 'get'
    })
  }
}
