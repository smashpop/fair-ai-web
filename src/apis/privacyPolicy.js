import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-privacy-policy-page',
    method: 'post',
    data
  })
}

export function fetchListAll() {
  return request({
    url: '/ai-privacy-policy',
    method: 'get'
  })
}

export function fetchLast() {
  return request({
    url: '/ai-privacy-policy-last',
    method: 'get'
  })
}
