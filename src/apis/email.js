import request from '@/utils/request'

export function sendMailApi(data) {
  console.log('sendMailApi=', data)
  return request({
    url: '/ai-mail',
    method: 'post',
    data
  })
}
