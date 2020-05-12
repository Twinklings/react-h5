import request from '../utils/axios'

export function axios(url,params) {
    return request({
      url:url,
      method:'post',
      data:params
    })
}
