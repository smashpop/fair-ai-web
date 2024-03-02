import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-guideline-page',
    method: 'post',
    data
  })
}

export function fetchListAll(data) {
  return request({
    url: '/ai-guideline',
    method: 'get',
    data
  })
}

export function searchList(data) {
  return request({
    url: '/ai-guideline-search',
    method: 'post',
    data
  })
}
