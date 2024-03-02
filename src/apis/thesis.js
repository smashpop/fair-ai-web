import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-thesis-page',
    method: 'post',
    data
  })
}

export function fetchListAll(data) {
  return request({
    url: '/ai-thesis',
    method: 'get',
    data
  })
}

export function searchList(data) {
  return request({
    url: '/ai-thesis-search',
    method: 'post',
    data
  })
}
