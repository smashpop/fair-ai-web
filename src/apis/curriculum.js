import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-curriculum-page',
    method: 'post',
    data
  })
}

export function fetchListAll(data) {
  return request({
    url: '/ai-curriculum',
    method: 'get',
    data
  })
}

export function searchList(data) {
  return request({
    url: '/ai-curriculum-search',
    method: 'post',
    data
  })
}
