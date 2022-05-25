import request from '@/utils/request'

export default {
    //生成订单
  createOrders(courseId) {
    return request({
      url: '/eduOrder/order/createOrder/'+courseId,
      method: 'post'
    })
  },
  //根据订单id查询订单信息
  getOrdersInfo(id) {
    return request({
      url: '/eduOrder/order/getOrderInfo/'+id,
      method: 'get'
    })
  },
  //生成二维码的方法
  createNatvie(orderNo) {
    return request({
      url: '/eduOrder/paylog/createNative/'+orderNo,
      method: 'get'
    })
  },

  //查询订单状态的方法
  //生成二维码的方法
  queryPayStatus(orderNo) {
    return request({
      url: '/eduOrder/paylog/queryPayStatus/'+orderNo,
      method: 'get'
    })
  }
}