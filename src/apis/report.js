import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-report-page',
    method: 'post',
    data
  })
}

export function fetchListAll(data) {
  return request({
    url: '/ai-report',
    method: 'get',
    data
  })
}

export function searchList(data) {
  return request({
    url: '/ai-report-search',
    method: 'post',
    data
  })
}
