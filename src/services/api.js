import request from '../utils/axios'

export function axios(params) {
    return request({
      url:params.url,
      method:params.methodType || 'post',
      data:params.params
    })
}
